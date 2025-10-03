
import React, { useState, useEffect } from 'react';

import {HeroContext} from './HeroContext'
import { toast } from 'sonner';

export const HeroProvider = ({ children }) => {
  const [hero, setHero] = useState([]);
  const [singleHero, setSingleHero] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [singleHeroLoading, setSingleHeroLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("accessToken");  

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const fetchHero = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `${baseUrl}/hero`
      );

      if (!response.ok) throw new Error('Failed to fetch hero');

      const data = await response.json();
      setHero(data.hero || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createHero = async (newArticle) => {
    try {
      setIsCreating(true);
      setError(null);

      const response = await fetch(`${baseUrl}/hero`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: newArticle,
      });

      if (!response.ok) throw new Error('Failed to create hero image');

      const created = await response.json();
      console.log(created);
      
      if(created.status === "success"){
        toast.success(created.message);
      }
      // Update state immediately (optimistic UI)
      setHero((prev) => [created, ...prev]);
    } catch (err) {
      setError(err.message);
      console.log(err);      
    }finally{
      setIsCreating(false);
    }
  };

  const deleteHero = async (id) => {
    try {
      setError(null);

      const response = await fetch(`${baseUrl}/hero/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete hero image');

      const data = await response.json();
      if(data.status === "success"){
        toast.success(data.message);
      }

      // Optimistically remove from state
      setHero((prev) => prev.filter(item => item._id !== id));
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const getHeroById = async (id) => {
    try {
      setSingleHeroLoading(true);
      const res = await fetch(`${baseUrl}/hero/${id}`);
      const data = await res.json();

      if (data.status === 'success') {
        setSingleHero(data.news);
      }
    } catch (error) {
      console.error('Error fetching single hero:', error);
    }finally{
      setSingleHeroLoading(false)
    }
  };

  

  


  // Fetch news on mount
  useEffect(() => {
    fetchHero();
  }, []);


  const value = {
    hero, 
    isLoading, 
    isCreating, 
    error, 
    fetchHero, 
    createHero,
    deleteHero,
    getHeroById,
    singleHero,
    singleHeroLoading,
  }
  // Optional: also expose fetchNews so you can manually refresh
  return (
    <HeroContext.Provider value={value}>
      {children}
    </HeroContext.Provider>
  );
};

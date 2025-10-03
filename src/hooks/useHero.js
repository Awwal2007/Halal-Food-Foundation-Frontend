import { useContext } from "react";
import { HeroContext } from "../contexts/HeroContext";

export const useHero = () => useContext(HeroContext);
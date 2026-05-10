import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CAREER_START_YEAR = 2023;

export function yearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR;
}

export function currentYear(): number {
  return new Date().getFullYear();
}
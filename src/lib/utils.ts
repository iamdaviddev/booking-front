import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export const TOKEN_KEY = "token_booking"
export const USER_KEY = "user_booking"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

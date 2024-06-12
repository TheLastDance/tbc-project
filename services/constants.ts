import Stripe from "stripe";

export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
export const BLOB_CHECK_URL = "public.blob.vercel-storage.com"
export const IMG_MAX_SIZE = 1000000;

export const productCategories = [
  "Household Assistants",
  "Security & Defense",
  "Childcare & Education",
  "Customer Service",
  "Entertainment",
  "Sport"
]

export const productBrands = [
  "SynTech Industries",
  "CyberSphere",
  "EvoTech Robotics",
  "FutureWave Systems"
]

export const productGender = [
  "Male",
  "Female"
]

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true
});
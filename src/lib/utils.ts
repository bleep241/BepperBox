import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  return formatter.format(price);
}

export function constructMetadata({
  title = "BepperBox",
  description = "Create custom phone cases in minutes",
  image = "/bepisHead.png",
  icons = "/favicon.ico"
} : {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description, 
      images: [{url: image}],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://bepperbox.vercel.app/")
  }
}
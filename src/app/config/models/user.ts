import { Links2 } from "./links2"

export interface User {
    id: string
    updated_at: string
    username: string
    name: string
    portfolio_url: string
    bio: string
    location: string
    total_likes: number
    total_photos: number
    total_collections: number
    instagram_username: string
    twitter_username: string
    links: Links2
  }
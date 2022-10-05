import { CurrentUserCollection } from "./current-user-collection"
import { Exif } from "./exif"
import { Links } from "./links"
import { Urls } from "./urls"
import { User } from "./user"

export interface Root {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    downloads: number
    likes: number
    liked_by_user: boolean
    description: string
    exif: Exif
    location: Location
    current_user_collections: CurrentUserCollection[]
    urls: Urls
    links: Links
    user: User
  }
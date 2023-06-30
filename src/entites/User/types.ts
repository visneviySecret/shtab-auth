export interface Response {
    token: string
}

export interface Profile {
    avatar: string
    color: string
    country: string
    first_name: string
    full_name: string
    id: number
    is_can_use_google_authorization: boolean
    is_deleted: boolean
    last_name: string
    last_online: string
    last_team: number
    online: boolean
    phone_number?: string
    thumbnail_50: string
    thumbnail_150: string
    tracking?: string | boolean
    username: string
}

export interface RequestBody {
    username: string
    password: string
}

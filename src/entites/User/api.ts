import axios from 'axios'
import { Response, RequestBody, Profile } from './types'

export const signIn = async (payload: RequestBody): Promise<Response> =>
    await axios
        .post('http://localhost:5173/api/users/user/login/', payload)
        .then((res) => res.data)

export const getUserProfile = async (AUTH_TOKEN: string): Promise<Profile> => {
    const headers = {
        Authorization: AUTH_TOKEN,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
    return await axios
        .get('http://localhost:5173/api/users/profile/ ', {
            headers,
        })
        .then((res) => res.data)
}

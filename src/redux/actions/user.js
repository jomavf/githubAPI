import { SET_ACCESS_TOKEN } from "../types/user"

export const setAccessToken = (payload) => {
    return {
        type: SET_ACCESS_TOKEN,
        payload
    }
}
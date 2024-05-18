import { api } from "./api"


export type signUpDto = {
    email: string,
    name: string,
    password: string
}

export type BookingProps = {
    checkinDate: Date,
    checkoutDate: Date,
    amout: number,
}

export const AuthService = {
    async signUp (data: signUpDto){
        const result = await api.post('/signup', data)
        return result
    },

    async login(data: Omit<signUpDto, "name">) {
        const result = await api.post('/login', data)
        return result
    },
    async booking(data: BookingProps){
        const result = await api.post('/booking', data)
        return result
    }
}
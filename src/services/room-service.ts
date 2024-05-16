import { api } from "./api"


export const RoomService = {
    async getRooms() {
        const result = await api.get("/rooms")
        return result
    }
}
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})

export class UserService{
  listuser(){
    return api.get('/users')
  }
}
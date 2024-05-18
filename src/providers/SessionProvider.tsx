'use client'
import { createContext, useEffect, useLayoutEffect, useState } from "react"
import { getCookie, deleteCookie } from "cookies-next"
import { TOKEN_KEY, USER_KEY } from "@/lib/utils"
import { useFetch } from "@/hooks/useFetch";


interface authProps {
  token: string;
  user: any;
  rooms: { rooms: any[] }
  check: () => void;
  logOut: () => void;
  users: { users: any[] }
  bookings: { bookings: any[] }
}

export const authContext = createContext({} as authProps)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<any>(undefined)
  const [user, setUser] = useState<any>(undefined)
  const { data: rooms } = useFetch("/rooms")
  const { data: bookings } = useFetch("/bookings")
  const { data: users } = useFetch("/users")
  console.log(rooms, ":::::::::::::");
  

  function getTOKEN(){
    const check = getCookie(TOKEN_KEY)
    return check
  }

  function logOut(){
    deleteCookie(TOKEN_KEY)
    deleteCookie(USER_KEY)
    setToken(undefined)
    setUser(undefined)
    window.location.href = '/'
  }

  function getUSER(){
    const check = getCookie(USER_KEY) as string
    return check
  }

  function check(){
    getTOKEN()
    getUSER()
  }

  useLayoutEffect(() => {
    const token = getTOKEN()
    const user = getUSER() && JSON.parse(getUSER())
    setToken(token)
    setUser(user)
  }, [])

  return (
      <authContext.Provider value={{ token: token, user: user, check: check, logOut: logOut, rooms: rooms?.rooms , users: user?.users, bookings: bookings?.bookings }}>
        {children}
      </authContext.Provider>
  )
}
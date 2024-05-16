'use client'
import { createContext, useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { TOKEN_KEY, USER_KEY } from "@/lib/utils"


interface authProps {
  token: string;
  user: any;
  check: () => void
}

export const authContext = createContext({} as authProps)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<any>(undefined)
  const [user, setUser] = useState<any>(undefined)

  function getTOKEN(){
    const check = getCookie(TOKEN_KEY)
    return check
  }

  function getUSER(){
    const check = getCookie(USER_KEY) as string
    return check
  }

  function check(){
    getTOKEN()
    getUSER()
  }

  useEffect(() => {
    const token = getTOKEN()
    const user = getUSER() && JSON.parse(getUSER())
    setToken(token)
    setUser(user)
    
  }, [])

  return (
      <authContext.Provider value={{ token: token, user: user, check: check}}>
        {children}
      </authContext.Provider>
  )
}
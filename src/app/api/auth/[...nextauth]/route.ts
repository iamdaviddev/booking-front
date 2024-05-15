import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvicer from "next-auth/providers/credentials"

const nextAuthOPtions: NextAuthOptions = {
  providers: [
    CredentialsProvicer({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "senha", type: "password" },
      },

      async authorize(credentials, request) {
        const response = await fetch('http://localhost:3333/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })

        

        const user = await response.json()

        if(user && response.ok){
          return user
        }

        return null
      },
    })
  ],
  pages: {
    signIn: '/auth',
  }
}

const  handler = NextAuth(nextAuthOPtions )

export { handler as GET, handler as POST }
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
      name: "email",
      
      credentials: {
        username: { label: "Username", type: "text", placeholder: "ex:abc@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          return user
        } else {
          return null
      }
    }
  })
    // ...add more providers here
  ],
  secret : process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
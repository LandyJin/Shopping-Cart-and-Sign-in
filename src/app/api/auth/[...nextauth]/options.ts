import GithubProvider from 'next-auth/providers/github';
import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string,
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
            issuer: process.env.AUTH0_ISSUER
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username:{
                    label: "Username:",
                    type: "text",
                    placeholder: "Type your user name"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Type your password"
                }
            },
            async authorize(credentials) {
                const user = {id:"12", name:"Landy", password:"nextauth"}
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

}
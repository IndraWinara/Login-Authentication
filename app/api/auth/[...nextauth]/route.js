import User from "@/server/models/user";
import connectDb from "@/server/utils/db";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'


export const authOptions = {
    providers : [
        CredentialsProvider({
            name : 'Credentials',
            credentials : {},
            async authorize (credentials){
                try {
                    const {email,password} = credentials
                    await connectDb()
                    const user = await User.findOne({email})

                    if(!user){
                        return null
                    }
                    const isPasswordMatch = await bcrypt.compare(password,user.password)

                    if(!isPasswordMatch){
                        return null
                    }

                    return user

                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    session : {
        strategy : "jwt"
    },
    secret : process.env.NEXTAUTH_SECRET,
    pages : {
        signIn : "/"
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
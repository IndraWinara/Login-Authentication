import connectDb from "@/server/utils/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import User from "@/server/models/user"

export const POST = async (req)=> {
    try {
        const { name, email, password } = await req.json()
        const hashPassword = await bcrypt.hash(password,10)
        await connectDb()
        await User.create({
            name,email,password : hashPassword
        })
 
        return NextResponse.json({message : 'Success Register' },{status : 201})
    } catch (error) {
        return NextResponse.json({message : error.message},{status : 500})
    }
}


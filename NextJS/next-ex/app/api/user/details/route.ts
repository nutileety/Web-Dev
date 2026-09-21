import { db } from "../../../lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        // Prisma 8 style mutation method: .insert() wrapping a 'data' map object
        const user = await db.orm.public.User
        .select("id", "username", "password")
        .limit(2)
        .all();

        console.log(user)

        return NextResponse.json({
           user
        }, { status: 201 })

    } catch (error: any) {
        console.error("Database Insert Failure:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}


export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json()

        // Validate that parameters exist
        if (!username || !password) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }


        // Prisma 8 style mutation method: .insert() wrapping a 'data' map object
        const user = await db.orm.public.User.create({
                username,
                password
            
        })

        return NextResponse.json({
            id: user.id,
            username: user.username
        }, { status: 201 })

    } catch (error: any) {
        console.error("Database Insert Failure:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

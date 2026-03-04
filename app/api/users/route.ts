import { hashPassword } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const users = await prisma.user.findMany({
            where: {
                NOT: {
                    role: 'admin'
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                status: true,
                joinDate: true,
                phone: true
            }
        });
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const { name, email, role, phone,status, password } = await req.json();

    let data: any = {
        name: name,
        email: email,
        role: role,
        phone: phone,
        status: status
    }

      
    if(password){
        data.password = await hashPassword(password);
    }
    try {
        await prisma.user.create({
            data: data
        });
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
}
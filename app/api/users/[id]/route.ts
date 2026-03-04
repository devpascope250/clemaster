import { hashPassword } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const user = await prisma.user.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { name, email, role, phone, password, status } = await req.json();
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
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: data
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}


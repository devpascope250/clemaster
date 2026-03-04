import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    try {
        const message = await prisma.messages.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json(message, { status: 200 });
    } catch (error) {
        console.error("Error fetching messages:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

// set message as read
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const message = await prisma.messages.update({
            where: {
                id: id
            },
            data: {
                read: true
            }
        });
        return NextResponse.json(message, { status: 200 });
    } catch (error) {
        console.error("Error fetching messages:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}
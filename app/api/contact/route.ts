import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { fullName, email, phone, subject, message } = await req.json()

    try {
        await prisma.messages.create({
            data: {
                email: email,
                name: fullName,
                message: message,
                subject: subject,
                phone: phone,
                read: false
            }
        });
        return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 });
    } catch {
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }

}

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const messages = await prisma.messages.findMany({
            orderBy: {
                date: 'desc'
            }
        });
        return NextResponse.json(messages, { status: 200 });
    } catch (error) {
        console.error("Error fetching messages:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}
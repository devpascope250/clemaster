import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try{
        const platforms = await prisma.accounts.count();
        const messages = await prisma.messages.count();
        const blogs = await prisma.blogs.count();
        const users = await prisma.user.count(
            {
                where: {
                    NOT: {
                        role: "admin"
                    }
                }
            }
        );
        return NextResponse.json({platforms, messages, blogs, users}, { status: 200 });
    }catch (error) {
        console.error("Error fetching platforms:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}
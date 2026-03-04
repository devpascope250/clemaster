import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try{
        const blogs = await prisma.blogs.findMany({
            orderBy: {
                date: 'desc'
            }
        });
        return NextResponse.json(blogs, { status: 200 });
    }catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}
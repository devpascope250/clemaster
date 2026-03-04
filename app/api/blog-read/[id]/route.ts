import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// get single blog
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const blog = await prisma.blogs.findUnique({
            where: {
                id: id
            }
        });
        if (!blog) {
            return NextResponse.json({ "message": 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        console.error("Error fetching blog:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

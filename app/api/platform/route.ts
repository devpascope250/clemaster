import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try{
        const platforms = await prisma.accounts.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });
        return NextResponse.json(platforms, { status: 200 });
    }catch (error) {
        console.error("Error fetching platforms:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

// create new platform
export async function POST(req: NextRequest, res: NextResponse) {
    const { platform, url, icon, status } = await req.json();

    try {
        await prisma.accounts.create({
            data: {
                platform: platform,
                url: url,
                icon: icon,
                status: status
            }
        });
        return NextResponse.json({ message: "Platform created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating platform:", error);
        return NextResponse.json({ message: "Error creating platform" }, { status: 500 });
    }
}
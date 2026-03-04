import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { platform, url, icon, status } = await req.json();
    try {
        await prisma.accounts.update({
            where: {
                id: id
            },
            data: {
                platform: platform,
                url: url,
                icon: icon,
                status: status
            }
        });
        return NextResponse.json({ message: "Platform updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating platform:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        await prisma.accounts.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json({ message: "Platform deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting platform:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

// change platform status
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const getplatform = await prisma.accounts.findUnique({
            where: {
                id: id
            }
        });
        if (!getplatform) {
            return NextResponse.json({ "message": 'Platform not found' }, { status: 404 });
        }
        await prisma.accounts.update({
            where: {
                id: id
            },
            data: {
                status: getplatform.status === 'active' ? 'inactive' : 'active'
            }
        });
        return NextResponse.json({ message: "Platform status updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating platform status:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}
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

export async function POST(req: NextRequest) {
    const data = await req.json();
    // 1️⃣ Remove data:image/...;base64, prefix
    const base64Image = data.image.replace(
        /^data:image\/\w+;base64,/,
        ""
    );

    // 2️⃣ Upload to ImgBB
    const uploadImageResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
        {
            method: "POST",
            body: new URLSearchParams({
                image: base64Image
            })
        }
    );

    const uploadResult = await uploadImageResponse.json();

    if (!uploadImageResponse.ok || !uploadResult.success) {
        return NextResponse.json(
            { error: "Image upload failed" },
            { status: 500 }
        );
    }

    // 3️⃣ Get URL
    const imageUrl = uploadResult.data.url;

    // 4️⃣ Save in DB
    await prisma.blogs.create({
        data: {
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            author: data.author,
            image: imageUrl
        }
    });

    return NextResponse.json(
        { message: "Blog created successfully" },
        { status: 201 }
    );
}
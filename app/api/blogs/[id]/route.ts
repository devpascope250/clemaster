import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const data = await req.json();
    const blogId = (await params).id;

    // 1️⃣ Get existing blog
    const existingBlog = await prisma.blogs.findUnique({
        where: { id: blogId }
    });

    if (!existingBlog) {
        return NextResponse.json(
            { error: "Blog not found" },
            { status: 404 }
        );
    }
    let imageUrl = existingBlog.image;
    if (data.image && data.image !== "" && data.image !== existingBlog.image) {
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
        imageUrl = uploadResult.data.url;
    }

    // 3️⃣ Update blog
    await prisma.blogs.update({
        where: { id: blogId },
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
        { message: "Blog updated successfully" },
        { status: 200 }
    );
}


// delete blog
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const blog = await prisma.blogs.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ "message": 'There is Server error try again later' }, { status: 500 });
    }
}

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

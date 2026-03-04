import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(request: NextRequest) {
    const userid = request.headers.get('x-user-id');
    if(!userid){
        return NextResponse.json(
            {
                message: 'UnAuthorized Here!'
            },{
                status: 401
            }
        );
    }
    try{
        const user = await prisma.user.findUnique(
            {
                where: {
                    id: userid
                },
            }
        );
        return NextResponse.json({
            user: {id: user?.id, email: user?.email, role: user?.role}
        }, {status: 200});
    }catch{

        return NextResponse.json({"message": 'There is Server error try again later'}, { status: 500});
    }
}
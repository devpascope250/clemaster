export const runtime = 'nodejs'
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateToken, setTokenCookieApp, verifyPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
    console.log('Reached');
    
    try {
        const data = await request.json();
        const { email, password } = data;

        const login = await prisma.user.findFirst(
            {
                where: {
                    email: email
                },
            }
        );

        if (!login) {
            return NextResponse.json(
                {
                    message: 'The Email Is not Registered in system'
                }, {
                status: 404
            }
            )
        }

        const verifyPass = await verifyPassword(password, login.password);
        if (!verifyPass) {
            return NextResponse.json(
                {
                    message: 'The password is Inccorect Try correct one!'
                }, {
                status: 401
            }
            )
        }
        if (login.status !== "active") {
            return NextResponse.json({
                message: 'Your Account is not verified'
            }, {
                status: 401
            });
        }

        const token = await generateToken({ id: login.id, role: login.role});
        const response = NextResponse.json(
            {
                message: "Login successful",
                user: {
                    id: login.id,
                    role: login.role,
                }
            },
            { status: 200 }
        );

        setTokenCookieApp(response, token);
        return response;
    } catch (err) {
        console.log(err);
        
        return NextResponse.json(
            {
                message: err
            },
            {
                status: 500
            }
        )
    }
}
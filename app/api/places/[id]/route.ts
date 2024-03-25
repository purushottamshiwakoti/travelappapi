import db from "@/lib/db";
import { NextResponse,  NextRequest } from "next/server";

export async function GET(req:  NextRequest, params:any) {
    try {
        console.log(params.params.id);
        const id = params.params.id;
        const place = await db.places.findUnique({
            where: {
                id
            },
            include: {
                Feedback: {
                    include:{
                        user:true
                    }
                },
                Rating: {
                    include:{
                        user:true
                    }
                }
            }
        });
        if (!place) {
            return NextResponse.json({ message: "No place found" }, { status: 404 })
        }
        return NextResponse.json({ message: "Successfully fetched place", place }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 })
    }
}

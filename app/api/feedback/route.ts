import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

export async function POST(req:NextRequest){
    try {
        const {placesId,userId,feedback}=await req.json();
        await db.feedback.create({
            data:{
                placesId,
                userId,
                feedback
            }
        });

        return NextResponse.json({message:"Successfully placed feedback"},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
        
    }
}

export async function GET(req:NextRequest){
    try {
       const token=await req.headers
      const bearerToken=token.get("Authorization")?.split(" ")[1];
      const user=await db.token.findUnique({
        where:{
            token: bearerToken
        }
      });
      if(!user){
        return NextResponse.json({message:"Invalid token"},{status:400})
      }

        const feedback=await db.feedback.findMany({
            where:{
                userId:user.userId!
            },
            include:{
                place:true
            }
        })
        return NextResponse.json({message:"Successfully fetched feedback", feedback},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
        
    }
}
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {placesId,userId,rating}=await req.json();
        await db.rating.create({
            data:{
                placesId,
                userId,
                rating
            }
        });

        return NextResponse.json({message:"Successfully placed rating"},{status:200})
        
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

        const rating=await db.rating.findMany({
            where:{
                userId:user.userId!
            },
            include:{
                place:true
            }
        })
        return NextResponse.json({message:"Successfully fetched rating", rating},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
        
    }
}
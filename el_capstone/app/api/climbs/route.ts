import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import Climb from "@/models/climb"


export const GET = async () => {
    
    /// climb controller things 
    try {
        await dbConnect()
        // @ts-ignore
        const climbs = await Climb.find({});
        console.log(climbs);
        return NextResponse.json(climbs);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///

}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect()
        // console.log( await req.json())

        const newClimb = new Climb( await req.json());
        console.log(newClimb)
        newClimb.save();

        return NextResponse.json(newClimb)
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
}



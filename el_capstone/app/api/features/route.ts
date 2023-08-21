import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import Feature from "@/models/feature"


export const GET = async () => {
    
    /// feature controller things 
    try {
        await dbConnect()
        // @ts-ignore
        const features = await Feature.find({});
        console.log(features);
        return NextResponse.json(features);
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

        const newFeature = new Feature( await req.json());
        console.log(newFeature)
        newFeature.save();

        return NextResponse.json(newFeature)
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
}



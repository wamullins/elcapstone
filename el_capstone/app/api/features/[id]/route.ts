import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import Feature from "@/models/feature"


export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!Feature) {
        return (NextResponse.error())
    }
    /// feature controller things 
    try {
        await dbConnect()
        const feature = await Feature.findById(params.id);
        if (!feature) throw Error("Feature not found");
        console.log(feature);
        return NextResponse.json(feature);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const DELETE = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!Feature) {
        return (NextResponse.error())
    }
    /// feature controller things 
    try {
        await dbConnect()
        const deletedFeature = await Feature.findByIdAndDelete(params.id);

        if (!deletedFeature) throw Error("Feature not found");
        console.log(deletedFeature);

        return NextResponse.json(deletedFeature);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const PUT = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!Feature) {
        return (NextResponse.error())
    }
    /// feature controller things 
    try {
        await dbConnect()
        // couldn't use req.body without a lot of errors so leaning into the req.json which has been working
        const updatedFeature = await Feature.findByIdAndUpdate(params.id, await req.json(), { new: true });

        if (!updatedFeature) throw Error("Feature not found");
        console.log(updatedFeature);

        return NextResponse.json(updatedFeature);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}
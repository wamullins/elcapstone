import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import Climb from "@/models/climb"


export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!Climb) {
        return (NextResponse.error())
    }
    /// climb controller things 
    try {
        await dbConnect()
        const climb = await Climb.findById(params.id);
        if (!climb) throw Error("Climb not found");
        console.log(climb);
        return NextResponse.json(climb);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const DELETE = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!Climb) {
        return (NextResponse.error())
    }
    /// climb controller things 
    try {
        await dbConnect()
        const deletedClimb = await Climb.findByIdAndDelete(params.id);

        if (!deletedClimb) throw Error("Climb not found");
        console.log(deletedClimb);

        return NextResponse.json(deletedClimb);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const PUT = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!Climb) {
        return (NextResponse.error())
    }
    /// climb controller things 
    try {
        await dbConnect()
        // couldn't use req.body without a lot of errors so leaning into the req.json which has been working
        const updatedClimb = await Climb.findByIdAndUpdate(params.id, await req.json(), { new: true });

        if (!updatedClimb) throw Error("Climb not found");
        console.log(updatedClimb);

        return NextResponse.json(updatedClimb);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}
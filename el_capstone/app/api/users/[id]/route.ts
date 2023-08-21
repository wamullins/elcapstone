import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import User from "@/models/user"


export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!User) {
        return (NextResponse.error())
    }
    /// user controller things 
    try {
        await dbConnect()
        const user = await User.findById(params.id);
        if (!user) throw Error("User not found");
        console.log(user);
        return NextResponse.json(user);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const DELETE = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!User) {
        return (NextResponse.error())
    }
    /// user controller things 
    try {
        await dbConnect()
        const deletedUser = await User.findByIdAndDelete(params.id);

        if (!deletedUser) throw Error("User not found");
        console.log(deletedUser);

        return NextResponse.json(deletedUser);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const PUT = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!User) {
        return (NextResponse.error())
    }
    /// user controller things 
    try {
        await dbConnect()
        // couldn't use req.body without a lot of errors so leaning into the req.json which has been working
        const updatedUser = await User.findByIdAndUpdate(params.id, await req.json(), { new: true });

        if (!updatedUser) throw Error("User not found");
        console.log(updatedUser);

        return NextResponse.json(updatedUser);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}
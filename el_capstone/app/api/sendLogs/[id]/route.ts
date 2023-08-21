import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import SendLog from "@/models/sendLog"


export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!SendLog) {
        return (NextResponse.error())
    }
    /// sendLog controller things 
    try {
        await dbConnect()
        const sendLog = await SendLog.findById(params.id);
        if (!sendLog) throw Error("SendLog not found");
        console.log(sendLog);
        return NextResponse.json(sendLog);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const DELETE = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!SendLog) {
        return (NextResponse.error())
    }
    /// sendLog controller things 
    try {
        await dbConnect()
        const deletedSendLog = await SendLog.findByIdAndDelete(params.id);

        if (!deletedSendLog) throw Error("SendLog not found");
        console.log(deletedSendLog);

        return NextResponse.json(deletedSendLog);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}

export const PUT = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // @ts-ignore
    if (!SendLog) {
        return (NextResponse.error())
    }
    /// sendLog controller things 
    try {
        await dbConnect()
        // couldn't use req.body without a lot of errors so leaning into the req.json which has been working
        const updatedSendLog = await SendLog.findByIdAndUpdate(params.id, await req.json(), { new: true });

        if (!updatedSendLog) throw Error("SendLog not found");
        console.log(updatedSendLog);

        return NextResponse.json(updatedSendLog);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///
}
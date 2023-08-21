import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import SendLog from "@/models/sendLog"


export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    /// sendLog controller things 
    try {
        await dbConnect()
        // @ts-ignore

        // req.query not working here so I switched to search params
        if (searchParams.get("userID")) {
            const sendLog = await SendLog.find({ userID: searchParams.get("userID") });
            if (!sendLog) throw Error("sendLog not found");
            console.log(sendLog);
            return NextResponse.json(sendLog);
        }
        else if (searchParams.get("routeID")) {
            const sendLog = await SendLog.find({ routeID: searchParams.get("routeID") });
            if (!sendLog) throw Error("sendLog not found");
            console.log(sendLog);
            return NextResponse.json(sendLog);
        }
        else {
            const sendLog = await SendLog.find({});
            console.log(sendLog);
            return NextResponse.json(sendLog);
        }
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

        const newSendLog = new SendLog( await req.json());
        console.log(newSendLog)
        newSendLog.save();

        return NextResponse.json(newSendLog)
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
}



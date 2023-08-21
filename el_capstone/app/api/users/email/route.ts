import { NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import User from "@/models/user"


export const GET = async () => {
    
    /// user controller things 
    try {
        await dbConnect()
        // @ts-ignore
        const users = await User.find({}, { email: 1 });
        console.log(users);
        return NextResponse.json(users);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
    ///

}


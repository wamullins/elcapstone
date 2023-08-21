import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/db/index"
// @ts-ignore
import User from "@/models/user"


export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    /// user controller things 
    try {
        await dbConnect()
        // @ts-ignore

        // req.query not working here so I switched to search params
        if (searchParams.get("name")) {
            const user = await User.find({ name: searchParams.get("name") });
            if (!user) throw Error("user not found");
            console.log(user);
            return NextResponse.json(user);
        }
        else if (searchParams.get("email")) {
            const user = await User.find({ email: searchParams.get("email") });
            if (!user) throw Error("user not found");
            console.log(user);
            return NextResponse.json(user);
        }
        else {
            const users = await User.find({});
            console.log(users);
            return NextResponse.json(users);
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

        const newUser = new User( await req.json());
        console.log(newUser)
        newUser.save();

        return NextResponse.json(newUser)
    } catch (e) {
        console.log(e);
        return NextResponse.json(e);
    }
}



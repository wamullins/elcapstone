import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({Welcome: "Use /climbs, /featuers, /sendlogs, and /users to navigate!"})
}
// const mongoose = require("mongoose");

// mongoose
//     .connect(process.env.DATABASE_URL)

//     .then(() => {
//         console.log("Successfully connected to MongoDB.");
//     })
//     .catch((e) => {
//         console.error("Connection error", e.message);
//     });

// const db = mongoose.connection;

// module.exports = db;
////////////////////////////

import mongoose from "mongoose";

console.log("before everything");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

console.log("before cached");
let cached = global.mongoose;
console.log("after cached");

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;

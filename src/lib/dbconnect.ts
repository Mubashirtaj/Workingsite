import mongoose from "mongoose";


type ConnectionObject = {
    isConected?: number
}


const connection: ConnectionObject = {}



export async function dbConnnect(): Promise<void> {

    if (connection.isConected) {
        console.log("ALready conected");

    }
    try {
        const db = await mongoose.connect(process.env.Data_Bases || '')
        connection.isConected = db.connections[0].readyState
        console.log("Data based connected succesfully");

    } catch (error) {
        console.log("Data based error", error);
        process.exit(1)
    }
}
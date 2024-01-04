import { connect } from "mongoose"

export default async function connection() {
    const connectURI = process.env.MONGO_URI
    
    connect(connectURI)
};
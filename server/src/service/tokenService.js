import Token from "../models/Token.js"
import jwt from 'jsonwebtoken'

export const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "15m"})
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})

    return { accessToken, refreshToken }
};

export const saveToken = async (userId, refreshToken) => {
    const tokenData = await Token.findOne({ user: userId })

    if (tokenData) {
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    }

    const token = await Token.insertMany([{ user: userId, refreshToken }])
    return token
}
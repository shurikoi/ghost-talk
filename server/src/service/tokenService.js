import Token from "../models/Token.js"
import jwt from 'jsonwebtoken'

export const serviceGenerateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "15m"})
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})

    return { accessToken, refreshToken }
};

export const serviceSaveToken = async (userId, refreshToken) => {
    const tokenData = await Token.findOne({ user: userId })

    if (tokenData) {
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    }

    const token = await Token.insertMany([{ user: userId, refreshToken }])
    return token
}

export const serviceRemoveToken = async (refreshToken) => {
    const tokenData = await Token.deleteOne({ refreshToken })
    return tokenData
}
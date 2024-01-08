import { hashSync } from 'bcrypt'

export default async function hashPassword(password) {
    return hashSync(password, process.env.PASSWORD_SALT)
}
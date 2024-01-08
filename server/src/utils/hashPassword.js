import { hash } from 'bcrypt'

export default async function hashPassword(password) {
    return hash(password, process.env.PASSWORD_SALT)
}
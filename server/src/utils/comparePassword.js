import { compareSync } from 'bcrypt'

export default async function comparePassword(password, hashedPassword) {
    return compareSync(password, hashedPassword)
}
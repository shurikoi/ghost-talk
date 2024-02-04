import dayjs from "dayjs"

export default function useTimestamp(date = undefined, format = undefined) {
    return dayjs(date).format(format)
}
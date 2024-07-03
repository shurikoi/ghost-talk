import HeadImage from "../../../public/images/HeadImage"

export default function Main() {
    return (
        <div className="bg-[#0a092d] h-full rounded-3xl m-1">
            <div className="flex flex-col gap-[3rem] h-full justify-center items-center">
                <div className="text-[#d4d8ff] text-4xl font-eUkraineHead">
                    Master words by flashcards
                </div>
                <HeadImage className="h-[400px]" />
            </div>
        </div>
    )
}
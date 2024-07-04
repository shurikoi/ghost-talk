import quill from '/images/quill.png'
import chip from '/images/chip.png'

export default function CreateSetBtn({ title, description, imageName }) {
  const images = {
    quill,
    chip,
  }

  return (
    <div className="flex w-auto h-full justify-between items-center p-[3rem] bg-indigo-300 rounded-xl border-white border-[3px] text-indigo-950 cursor-pointer duration-200 hover:bg-indigo-400">
      <div className="flex flex-col gap-[1rem]">
        <div className="font-eUkraineHead text-xl">{title}</div>
        <div className="font-eUkraine font-thin italic">{description}</div>
      </div>
      <img src={images[imageName]} alt={imageName} className="h-[4rem]" />
    </div>
  )
}

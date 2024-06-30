import { useContext, useState } from 'react'
import BackArrowIcon from '../ui/icon/BackArrowIcon'
import { FormModalContext } from '../../contexts/FormModalContext'

export default function SpeechModal() {
  const { modalMenuStore } = useContext(FormModalContext)
  const [ selected, setSelected ] = useState("")
  const options = ['nouns', 'adjectives', 'verbs', 'adverbs']

  return (
    <>
      <BackArrowIcon onClick={() => modalMenuStore.removeClass()} />
      <div className="font-eUkraineHead text-[20px]">Select part of speech</div>
      {/* <div className="font-eUkraine font-light">dsff</div> */}
      <div className="flex flex-col items-center gap-2 w-full">
        {options.map((option, index) => (
          <div
            className="p-2 w-full bg-gray-200 rounded-xl text-center font-eUkraine font-thin cursor-pointer"
            key={index}
            onClick={() => setSelected(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </>
  )
}

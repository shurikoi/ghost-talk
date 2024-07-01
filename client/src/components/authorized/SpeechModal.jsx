import { useContext } from 'react'
import BackArrowIcon from '../ui/icon/BackArrowIcon'
import { FormModalContext } from '../../contexts/FormModalContext'
import { AuthorizedContext } from '../../contexts/AuthorizedContext'

export default function SpeechModal({ setState }) {
  const { modalMenuStore } = useContext(FormModalContext)
  const { setStore } = useContext(AuthorizedContext)
  const options = ['nouns', 'adjectives', 'verbs', 'adverbs']

  const handleOptionChange = (element) => {
    setStore.setPartOfSpeech(element.target.value)
    setState("amountOfCards")
  }

  return (
    <>
      <BackArrowIcon onClick={() => modalMenuStore.removeClass()} />
      <div className="font-eUkraineHead text-[20px]">Select part of speech</div>
      <div className="font-eUkraine font-light text-center">
        Tap one below you want to execute
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 w-full">
        {options.map((option, index) => (
          <div key={index} className="w-[47%]">
            <label
              htmlFor={option}
              className="block p-4 bg-gray-200 rounded-xl text-center font-eUkraine font-thin cursor-pointer hover:bg-gray-300 has-[:checked]:bg-gray-300 "
            >
              <input
                type="radio"
                name="partOfSpeech"
                id={option}
                value={option}
                className="appearance-none"
                onChange={handleOptionChange}
                checked={setStore.partOfSpeech === option}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

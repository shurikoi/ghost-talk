import { useContext } from 'react'
import BackArrowIcon from '../ui/icon/BackArrowIcon'
import { FormModalContext } from '../../contexts/FormModalContext'
import { AuthorizedContext } from '../../contexts/AuthorizedContext'

export default function CardsAmount({ setState }) {
  const { modalMenuStore } = useContext(FormModalContext)
  const { setStore } = useContext(AuthorizedContext)
  const options = [...Array(10).keys()].slice(1)

  const handleOptionChange = (element) => {
    setStore.setAmountOfCards(element.target.value)
    modalMenuStore.removeClass()
  }

  return (
    <>
      <BackArrowIcon onClick={() => setState("partOfSpeech")} />
      <div className="font-eUkraineHead text-[20px]">Select amount of cards</div>
      <div className="font-eUkraine font-light text-center">
        You can execute up to 10 words
      </div>
      <div className="flex flex-col items-center w-full gap-2 h-[15rem] overflow-auto">
        {options.map((option, index) => (
          <div key={index} className="w-full">
            <label
              htmlFor={option}
              className="block p-4 bg-gray-200 rounded-xl text-center font-eUkraine font-thin cursor-pointer hover:bg-gray-300 has-[:checked]:bg-gray-300"
            >
              <input
                type="radio"
                name="partOfSpeech"
                id={option}
                value={option}
                className="appearance-none"
                onChange={handleOptionChange}
                checked={setStore.amountOfCards == option}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

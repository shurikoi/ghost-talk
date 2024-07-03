import GetStartedBtn from '../ui/buttons/GetStartedBtn'

export default function Header() {
  document.body.style.backgroundColor = "#010a4c"
  return (
    <div className="flex flex-col gap-[0.3rem] m-1 md:flex-row justify-between text-white items-center bg-[#0a092d] border-none rounded-3xl border-[#111E80] py-[1.5rem] px-[4rem]">
      <div className="font-cosen text-3xl cursor-pointer select-none">Lexify</div>
      <GetStartedBtn />
    </div>
  )
}

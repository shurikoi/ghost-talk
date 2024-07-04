export default function CreateSetTitle({ title }) {
  return (
    <div className="flex flex-col justify-between md:flex-row md:items-center">
      <div className="font-eUkraine text-2xl">{title}</div>
      <div className="font-eUkraine font-thin text-sm text-yellow-500">public</div>
    </div>
  )
}

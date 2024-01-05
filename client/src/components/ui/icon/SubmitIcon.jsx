import { useEffect } from "react"

export default function SubmitIcon({className, onClick, isFilled}) {
  const colors = {
    default: "#95ed8e",
    active: "#61c558"
  }

  const fillColor = isFilled ? colors.active : colors.default

  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M31 15.5C31 6.94012 24.0599 -1.30062e-06 15.5 -5.52296e-07C6.94012 1.96032e-07 -2.10338e-06 6.94013 -1.35505e-06 15.5C-6.06725e-07 24.0599 6.94013 31 15.5 31C24.0599 31 31 24.0599 31 15.5ZM21.2092 15.5L13.4747 23.2435L11.6482 21.4145L17.5563 15.5L11.6482 9.57125L13.4747 7.74225L21.2092 15.5Z"
        fill={fillColor}
      />
    </svg>
  )
}

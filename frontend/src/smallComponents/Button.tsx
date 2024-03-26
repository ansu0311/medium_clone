import { MouseEvent } from "react"

type Props = {
    name: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export function Button(props: Props) {
  return (
    <>
    <button onClick={props.onClick} className="w-full bg-gray-900 dark:bg-cyan-900 text-white text-md font-semibold h-10 lg:h-12 rounded-md mt-4">{props.name}</button></>
  )
}

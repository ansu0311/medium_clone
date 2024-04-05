import { MouseEvent } from "react"

type Props = {
    name: any
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export function Button(props: Props) {
  return (
    <>
    <button onClick={props.onClick} className="w-full bg-gray-900 dark:bg-cyan-900 text-white text-md font-semibold h-10 lg:h-12 rounded-md mt-4">{props.name}</button></>
  )
}
export function ButtonMenu(props: Props) {
  return (
    <>
    <button onClick={props.onClick} className="w-fit px-6 py-1 rounded-full text-3xl font-grandHotel bg-[#FFA079] hover:bg-black hover:text-[#FFA079]">{props.name}</button></>
  )
}

export function ButtonNav(props: Props) {
  return (
    <>
    <button onClick={props.onClick} className="w-fit px-6 py-1 rounded-full text-2xl font-grandHotel bg-[#FFA079] hover:bg-black hover:text-[#FFA079]">{props.name}</button></>
  )
}
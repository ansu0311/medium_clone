import { ChangeEvent } from "react"

type Props ={
    label: string,
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    required: boolean
    type? : string
}
export function Input(props:Props) {
  return (
    <div className="text-md lg:text-lg flex flex-col my-1 lg:my-2">
        <label className="font-semibold mb-1 capitalize text-gray-900 dark:text-white" htmlFor="input" >{props.label}</label>
        <input className="px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={props.required} name="input" onChange={props.onChange}  type={props.type || "text"} placeholder={" " +props.placeholder}/>
    </div>
  )
}

export function InputMenu(props:Props) {
  return (
    <div className="flex flex-col my-1 lg:my-2">
        <input className="py-1.5 px-2 bg-[#F6DFC1] text-black placeholder:text-black/50 font-grandHotel text-xl rounded-full outline-[#FFA079] w-full" required={props.required} name="input" onChange={props.onChange}  type={props.type || "text"} placeholder={" " +props.placeholder}/>
    </div>
  )
}
type Props ={
    title:string,
}
export function Title(props:Props) {
  return (
    <div className="font-bold text-3xl lg:text-4xl flex justify-center text-gray-900 dark:text-white">{props.title}</div>
  )
}

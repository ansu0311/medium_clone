type Props ={
    title:string,
}

export function SideTitle(props: Props) {
  return (
    <div className="font-medium text-gray-700 capitalize text-md py-4">{props.title}</div>
  )
}

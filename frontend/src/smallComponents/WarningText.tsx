type Props ={
    text:string
    classProps:string
}

export function WarningText(props: Props) {
  return (
    <div className={props.classProps}>
        <div className="flex justify-center text-red-600 font-medium text-md">{props.text}</div>
    </div>
  )
}

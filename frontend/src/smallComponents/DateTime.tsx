type Props = {
    title: string
}

export default function DateTime(props: Props) {
  return (
    <div className="text-lg text-gray-500 font-medium py-4">{props.title}</div>
  )
}

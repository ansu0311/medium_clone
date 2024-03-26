type Props ={
    authorName: string,
    blogTitle: string,
}

export default function StafPickTile(props: Props) {
  return (
    <div className="flex flex-col mb-4">
        <div className="flex gap-2 text-sm mb-0.5">
            <div className="h-6 w-6 flex flex-col justify-center text-center bg-purple-300 rounded-full overflow-hidden object-cover">{props.authorName[0]}</div>
            <div className="my-auto font-medium">{props.authorName}</div>
        </div>
        <div className="text-lg font-bold">{props.blogTitle}</div>
    </div>
  )
}

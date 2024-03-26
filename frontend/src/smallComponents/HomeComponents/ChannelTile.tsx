type Props = {
    title : string,
    description : string,
}
export function ChannelTile( props: Props) {
  return (
    <div className="grid grid-cols-6 mb-3">
        <div className="col-span-3 grid grid-cols-5" >
            <div className="col-span-1 w-8 h-8 text-center flex flex-col justify-center rounded-full bg-purple-300 overflow-hidden">{props.title[0]}</div>
            <div className="col-span-4 flex flex-col pr-2">
                <div className="text-md font-semibold">{props.title}</div>
                <div className="text-sm font-light text-gray-500">{props.description}</div>
            </div>
        </div>
        <div className="col-span-1 ">
            <div className="py-1 mr-2 text-sm rounded-full border-black cursor-pointer text-center hover:text-white border bg-transparent hover:bg-black">Follow</div></div>
    </div>
  )
}

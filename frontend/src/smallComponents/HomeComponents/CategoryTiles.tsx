type Props = {
    title:string,
}
export default function CategoryTiles(props: Props) {
  return (
    <div className="bg-slate-200 hover:bg-slate-300 rounded-full py-1 px-4 cursor-pointer">{props.title}</div>
  )
}

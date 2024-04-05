type Props = {
    title: string;
}

export function TitleBlog(props: Props) {
  return (
    <div className="text-3xl capitalize">
      {props.title}</div>
  )
}

export function SubTitleBlog(props: Props) {
  return (
    <div className="text-lg font-medium mt-2 capitalize">
      {props.title}</div>
  )
}

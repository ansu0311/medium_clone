type Props = {
    title: string;
}

export function TitleBlog(props: Props) {
  return (
    <div className="text-5xl font-extrabold">
      {props.title}</div>
  )
}

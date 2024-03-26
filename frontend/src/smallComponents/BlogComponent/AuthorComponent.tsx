type Props = {
  name: string;
  quote: string;
};
export default function AuthorComponent(props: Props) {
  return (
    <>
      <div className="text-xl pb-2 font-medium">Author</div>
      <div className="grid grid-cols-6">
        <div className="h-12 my-auto w-12 col-span-1 flex justify-center rounded-full m-2 bg-purple-300">
          <div className="flex flex-col justify-center text-xl font-semibold ">
            {props.name[0]}
          </div>
        </div>
        <div className="col-span-5">
          <div className="font-bold text-2xl capitalize">{props.name}</div>
          <div className="text-md text-gray-500 font-normal py-2">
            {props.quote}
          </div>
        </div>
      </div>
    </>
  );
}

type Props = {
  name: string;
  quote: string;
  blogDescription: string;
  datePosted: string
};
export default function AuthorComponent(props: Props) {
  return (
    <>
      <div className="grid grid-cols-12 my-6">
        <div className="flex col-span-1 justify-center">
        <div className="h-12 my-auto w-12 flex justify-center rounded-full bg-[#FFC880]">
          <div className="flex flex-col justify-center text-xl font-semibold ">
            {props.name[0]}
          </div>
        </div>
        <div className="flex flex-col justify-end -ml-5">
        <div className="h-8 w-8 flex justify-center rounded-full bg-[#FDA481]">
          <div className="flex flex-col justify-center text-xl font-semibold ">
          </div>
        </div>
        </div>
        </div>
        <div className=" text-sm col-span-11 ml-4 my-auto">
          <div className=" capitalize">{props.name}</div>
          <div className="text-light text-[#f5662e] font-normal">Published in <span>{props.name}</span>{" . "} 
          <span>{`${Math.ceil(props.blogDescription.length / 120)}`} min read</span>{" . "}
          <span>{props.datePosted}</span>
          </div>
        </div>
      </div>
    </>
  );
}

import AuthorComponent from "../smallComponents/BlogComponent/AuthorComponent";
import { TitleBlog } from "../smallComponents/BlogComponent/TitleBlog";
import DateTime from "../smallComponents/DateTime";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";

export function Blog() {
  const routeParams = useParams();

  const {
    loading,
    title,
    description,
    author,
    authorId,
    quote,
    time,
  } = useBlog({ id: routeParams.id || "" });

  const today = new Date(time);
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  const dateToShow = month + " " + day + ", " + year;

  if (loading) {
    return (
      <div
        className="relative before:absolute before:inset-0
      before:-translate-x-full
      before:animate-[shimmer_2s_infinite]
      before:bg-gradient-to-r
      before:from-transparent before:via-purple-400/15 before:to-transparent
      isolate
    overflow-hidden"
      >
        <div className="grid grid-cols-9 pt-20 w-full h-screen">
          <div className="col-span-6 pl-24 flex flex-col">
            <div className="w-10/12 h-10 bg-purple-300/75 rounded-full my-1"></div>
            <div className="w-4/12 h-4 bg-purple-300/40 rounded-full my-1"></div>
            <div className="w-10/12 h-6 bg-purple-300/50 rounded-full mt-3 mb-1"></div>
            <div className="w-11/12 h-6 bg-purple-300/50 rounded-full my-1"></div>
            <div className="w-9/12 h-6 bg-purple-300/50 rounded-full mb-3 mt-1"></div>
          </div>
          <div className="col-span-3 flex flex-col pl-8 pr-16">
            <div className="w-4/12 h-4 bg-purple-300/40 rounded-full my-4"></div>
            <div className="grid grid-cols-6">
              <div className="h-12 my-auto w-12 col-span-1 rounded-full m-2 bg-purple-300/75"></div>
              <div className="col-span-5">
                <div className="w-8/12 h-6 bg-purple-300/60 rounded-full my-2"></div>
                <div className="w-11/12 h-4 bg-purple-300/40 rounded-full my-2"></div>
                <div className="w-6/12 h-4 bg-purple-300/40 rounded-full my-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-9 pt-20 w-full">
      <div className="col-span-6 pl-24 flex flex-col">
        <TitleBlog title={title} />
        <DateTime title={"Posted On " + dateToShow} />
        <div className="text-lg pt-3 font-medium text-gray-600">
          {description}
        </div>
      </div>
      <div className="col-span-3 flex flex-col pl-8 pr-16">
        <AuthorComponent name={author} quote={quote} />
      </div>
    </div>
  );
}

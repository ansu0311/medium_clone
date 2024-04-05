import AuthorComponent from "../smallComponents/BlogComponent/AuthorComponent";
import { SubTitleBlog, TitleBlog } from "../smallComponents/BlogComponent/TitleBlog";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import {NavBarBlog} from "../components/NavBar";

export function Blog() {
  const routeParams = useParams();

  const {
    loading,
    title,
    description,
    author,
    quote,
    time,
  } = useBlog({ id: routeParams.id || "" });

  const today = new Date(time);
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  const dateToShow = month + " " + day + ", " + year;

  const skItem = () => {
    return (
      <div
        className="relative before:absolute before:inset-0
      before:-translate-x-full
      before:animate-[shimmer_2s_infinite]
      before:bg-gradient-to-r
      before:from-transparent before:via-[#FFA079]/15 before:to-transparent
      isolate
    overflow-hidden z-10"
      >
        <div className="flex flex-col justify-between w-full h-fit rounded-xl p-2">
          <div className="flex flex-col justify-around h-2/5 px-1 gap-4">
            <div className="bg-[#FFA079]/20 h-12 rounded-full capitalize"></div>
            <div className="bg-[#FFA079]/20 h-6 rounded-full"></div>
            <div className="bg-[#FFA079]/20 h-6 -mt-2 w-2/3 rounded-full"></div>
            <div className="bg-[#FFA079]/20 h-4 w-2/5 rounded-full"></div>
          </div>
          <div className="w-full flex flex-col h-3/5 rounded-lg mt-6 overflow-hidden">
            <div className="bg-[#FFA079]/20 w-full h-96 object-center overflow-hidden rounded object-cover" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center w-screen bg-[#F6DFC1]">
    <div className="w-screen lg:w-[1280px] px-5 pt-4 flex flex-col h-screen">
      <NavBarBlog homePage={false} blogPage={true}/>
      <div className="flex justify-center pt-10">
        <div className="flex flex-col w-3/5">
        {(loading)?<>{skItem()}</>:<><TitleBlog title={title} />
        <SubTitleBlog title={title} />
        <AuthorComponent name={author} quote={quote} blogDescription={description} datePosted={dateToShow}/>
        <div className="text-lg pt-3 font-medium text-gray-600">
          {description}
        </div></>}
      </div>
      </div>
    </div>
    </div>
  );
}

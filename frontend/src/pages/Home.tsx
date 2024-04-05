import { useEffect } from "react";
import { BlogTile } from "../components/BlogTile";
import { NavBarBlog } from "../components/NavBar";
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { loading, blog } = useBlogs();
  const navigate = useNavigate()

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
        <div className="flex flex-col justify-between text-black bg-[#FFEFDC] w-72 h-[22rem] rounded-xl p-2">
          <div className="flex flex-col justify-around h-2/5 px-1">
            <div className="bg-[#FFA079]/20 h-8 rounded-full py-1 capitalize"></div>
            <div className="bg-[#FFA079]/20 h-4 w-1/3 rounded-full"></div>
            <div className="bg-[#FFA079]/20 h-4 rounded-full"></div>
            <div className="bg-[#FFA079]/20 h-4 rounded-full"></div>
          </div>
          <div className="w-full flex flex-col h-3/5 rounded-lg overflow-hidden">
            <div className="bg-[#FFA079]/20 h-16 grid grid-cols-2">
              <div className="bg-[#FFEFDC] col-span-1 rounded-br-xl">
                <div className="bg-[#FFA079]/20 h-10 my-2 mr-2 rounded-xl"></div>
              </div>
            </div>
            <div className="bg-[#FFA079]/20 w-full h-full object-center overflow-hidden rounded object-cover" />
          </div>
        </div>
      </div>
    );
  };

  const token = localStorage.getItem("token")
  useEffect(()=>{
    if(token === null){
      navigate("/signin")
    }
  },[token])

  return (
    <div className="flex justify-center w-screen bg-[#F6DFC1]">
      <div className="w-screen h-min-screen lg:w-[1280px] px-5 pt-4 flex flex-col">
        <NavBarBlog homePage={true} blogPage={true} />
        <div className=" flex flex-wrap gap-10 justify-center my-10">
          {!loading ? (
            blog.map((e: any, index: number) => {
              return (
                <BlogTile
                  to={`/blog/${e.id}`}
                  key={index}
                  authorName={
                    e.author.name ? e.author.name : "Anonymous Author"
                  }
                  time={e.dateCreated}
                  blogTitle={e.title}
                  blogCategory="Web-development"
                  blogDescription={e.description}
                  blogImage="sourse"
                />
              );
            })
          ) : (
            <>
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

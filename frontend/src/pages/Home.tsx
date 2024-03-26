import { BlogTile } from "../components/BlogTile";
import { useBlogs } from "../hooks";
import CategoryTiles from "../smallComponents/HomeComponents/CategoryTiles";
import { ChannelTile } from "../smallComponents/HomeComponents/ChannelTile";
import { ReadListTile } from "../smallComponents/HomeComponents/ReadListTile";
import { SideTitle } from "../smallComponents/HomeComponents/SideTitle";
import StafPickTile from "../smallComponents/HomeComponents/StafPickTile";

export function Home() {
  const readList: any[] = [];
  const { loading, blog } = useBlogs();

  const skItem = () => {
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
        <div className=" py-10 flex border-t-2 flex-col">
          <div className="grid grid-cols-5">
            <div className="col-span-4 flex flex-col">
              <div className="flex gap-2 pb-2">
                <div className="w-8 h-8 bg-purple-300/50 rounded-full my-auto"></div>
                <div className="w-48 h-6 bg-purple-300/50 rounded-full my-auto"></div>
              </div>
              <div className="w-96 h-8 bg-purple-300/75 rounded-full py-1"></div>
              <div className="w-10/12 h-4 bg-purple-300/40 rounded-full mt-3 mb-1"></div>
              <div className="w-11/12 h-4 bg-purple-300/40 rounded-full my-1"></div>
              <div className="w-9/12 h-4 bg-purple-300/40 rounded-full mb-3 mt-1"></div>
              <div className="flex justify-between pr-4">
                <div className="flex gap-3">
                  <div className="w-20 h-6 bg-purple-300/80 rounded-full my-auto"></div>
                  <div className="w-48 h-6 bg-purple-300/50 rounded-full my-auto"></div>
                </div>
                <div className="w-24 h-6 bg-purple-300/80 rounded-full my-auto"></div>
              </div>
            </div>
            <div className="col-span-1 w-40 h-32 relative  mt-5">
              <div className="bg-purple-300/50 w-full h-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-2 ">
        <div className="flex flex-col py-10 mr-14">
          {!loading ? (
            blog.map((e: any, index: number) => {
              return (
                <BlogTile
                to={`/blog/${e.id}`}
                  key={index}
                  authorName={e.author.name ? e.author.name : "Anonymous Author"}
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
            </>
          )}
        </div>
      </div>
      <div className="col-span-5 my-10 ml-20 px-12 border-l-2">
        <div>
          <div className=" flex flex-col">
            <SideTitle title="Staff Picks" />
            <div className="flex flex-col">
              <StafPickTile
                authorName="Sierra Eiman"
                blogTitle="The Future of Poetry"
              />
              <StafPickTile
                authorName="Sierra Eiman"
                blogTitle="The Future of Poetry"
              />
              <StafPickTile
                authorName="Sierra Eiman"
                blogTitle="The Future of Poetry"
              />
            </div>
          </div>
          <div className=" flex flex-col mb-4">
            <SideTitle title="Recommended Topics" />
            <div className="flex flex-wrap gap-3 pr-32 text-sm">
              <CategoryTiles title="Writing" />
              <CategoryTiles title="Relationships" />
              <CategoryTiles title="Culture" />
              <CategoryTiles title="Psychology" />
              <CategoryTiles title="Life" />
              <CategoryTiles title="Health" />
              <CategoryTiles title="Mental Health" />
            </div>
          </div>
          <div className=" flex flex-col">
            <SideTitle title="Who to follow: " />
            <div className="flex flex-col">
              <ChannelTile
                title="The Useful Tech"
                description="passionfroot.me/the-useful-tech | Everything about Apple!"
              />
              <ChannelTile
                title="The Useful Tech"
                description="passionfroot.me/the-useful-tech | Everything about Apple!"
              />
              <ChannelTile
                title="The Useful Tech"
                description="passionfroot.me/the-useful-tech | Everything about Apple!"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <SideTitle title="Reading List" />
            <div className="flex flex-col">
              {readList.length == 0 ? (
                <div className="flex pr-32">
                  <div className="text-sm text-gray-500">
                    {"Click the"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="mx-1 w-4 h-6 inline my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    {
                      "on any story to easily add it to your reading list or a custom list that you can share."
                    }
                  </div>
                </div>
              ) : (
                readList.map(() => <ReadListTile/>)
              )}
            </div>
          </div>
          <div className="grid grid-cols-12 my-3">
            <div className="flex-wrap gap-x-3 flex col-span-6">
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                help
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Status
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                about
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Career
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Blog
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Privacy
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Terms
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Text To Speech
              </button>
              <button className="flex-grow outline-none bg-transparent capitalize text-xs text-gray-500 hover:text-black">
                Teams
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

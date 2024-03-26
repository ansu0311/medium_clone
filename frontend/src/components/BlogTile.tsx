import { Link } from "react-router-dom";
import CategoryTiles from "../smallComponents/HomeComponents/CategoryTiles";

type Props = {
  authorName: string;
  time: number;
  blogTitle: string;
  blogDescription: string;
  blogCategory: string;
  blogImage: string;
  to: string;
};


export function BlogTile(props: Props) {
  const today = new Date(props.time);
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  const dateToShow = month + " " + day + ", " + year;
  const iconSize = "h-5 w-5 text-gray-500 hover:text-black";

      
  return (
    <Link to= {props.to}>
    <div className=" py-10 flex flex-col border-t-2">
      <div className="grid grid-cols-5">
        <div className="col-span-4 flex flex-col">
          <div className="flex gap-2 pb-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full my-auto text-center flex flex-col justify-center text-white object-cover overflow-hidden">
              {props.authorName[0]}
            </div>
            <div className="my-auto capitalize">{props.authorName}</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full my-auto"></div>
            <div className="my-auto text-gray-500">{dateToShow}</div>
          </div>
          <div className="font-bold text-2xl py-1">{props.blogTitle}</div>
          <div className="text-lg line-clamp-3 mb-8">
            {props.blogDescription}
          </div>
          <div className="flex justify-between pr-4">
            <div className="flex gap-3 text-sm">
              <CategoryTiles title={props.blogCategory} />
              <div className="text-gray-500 my-auto">{`${Math.ceil(props.blogDescription.length / 120)}`} min read</div>
              <div className="text-gray-500 my-auto">Selected for You</div>
            </div>
            <div className="flex gap-3">
              <div id="save to watchlist" className="my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={iconSize}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
              <div id="not Intrested" className="my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={iconSize}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div id="more menu" className="my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={iconSize}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 w-40 h-32 relative  mt-10">
          <img
            src={props.blogImage}
            alt="blogimage"
            className="bg-purple-300 w-full h-full object-center overflow-hidden rounded object-cover"
          />
        </div>
      </div>
    </div>
    </Link>
  );
}

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const today = new Date(props.time);
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  const dateToShow = month + " " + day + ", " + year;
  const iconSize = "h-4 w-4";

  return (
    <div className="flex flex-col justify-between text-black bg-[#FFEFDC] w-72 h-[22rem] rounded-xl p-2">
      <div className="flex flex-col justify-around h-2/5 px-1">
        <div className=" text-lg font-medium leading-6 py-1 capitalize">
          {props.blogTitle}
        </div>
        <div className="flex font-medium gap-2 text-xs">
          <div className="flex gap-0.5">
            <span>
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
            <span className="my-auto">{dateToShow}</span>
          </div>
          <div className="flex">
            <span>
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>
            <span className="my-auto">{"10k"}</span>
          </div>
        </div>
        <div className="text-sm leading-4">{"Short para"}</div>
        <div className=" relative">
          <button
            onClick={() => navigate(props.to)}
            className="bg-[#FFEFDC] rounded-xl text-lg font-bold -ml-3 px-2 py-2 absolute"
          >
            <div className="flex justify-center bg-transparent border-2 hover:text-white border-black hover:bg-[#FFA079] hover:border-[#FFA079] px-2 py-2 rounded-2xl">
              <div>Read Article</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="my-auto w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full h-3/5 rounded-lg overflow-hidden">
        <img
          src={props.blogImage}
          alt="blogimage"
          className="bg-[#FFA079]/80 w-full h-full object-center overflow-hidden rounded object-cover"
        />
      </div>
    </div>
  );
}

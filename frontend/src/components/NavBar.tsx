import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { ButtonNav } from "../smallComponents/Button";

type Props = {
  homePage: boolean;
  blogPage: boolean;
};

export function NavBarBlog({ homePage, blogPage }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className=" cursor-pointer" onClick={() => navigate("/home")}>
        <img src={logo} className=" z-0 w-16 lg:w-[4.5rem]" />
      </div>
      <div className="flex gap-2 my-auto">
        {blogPage ? (
          <ButtonNav
            name={
              <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
                <div>write</div>
              </div>
            }
            onClick={() => navigate("/blog")}
          />
        ) : (
          <></>
        )}
        {!homePage ? (
          <div
            onClick={() => navigate("/home")}
            className="flex flex-col cursor-pointer justify-center text-[#FFA079] hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        ) : (
          <ButtonNav
            name={
              <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <div>Logout</div>
              </div>
            }
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          />
        )}
      </div>
    </div>
  );
}

import { SignInComponent } from "../components/Signin";
import mainImage from "../assets/Main Image.svg"
import shade from "../assets/Union.svg"

export  function Signin() {
  return (
    <div className="flex justify-center h-screen bg-[#F6DFC1]">
      <div className="flex flex-col justify-center">
        <SignInComponent/>
        <div className="flex justify-center">
        <img src={mainImage} className=" z-0 w-5/12 absolute bottom-0"/>
        </div>
        <img src={shade} className="z-1 opacity-40 w-5/12 absolute left-10 top-0"/>
      </div>
    </div>
  )
}

import { useNavigate } from "react-router-dom";
import { InputMenu } from "../smallComponents/Input";
import { ButtonMenu } from "../smallComponents/Button";
import { useState } from "react";
import axios from "axios";
import { WarningText } from "../smallComponents/WarningText";
import { ExistUserSchema } from "ansuman_medium_schema";
import logo from "../assets/Logo.svg";

export function SignInComponent() {
  const [userInput, setUserInput] = useState<ExistUserSchema>({
    email: "",
    password: "",
  })
  const [err, setErr] = useState("");
  const navigate =useNavigate()

  return (
    <div className="z-10 bg-black/40 rounded-2xl flex flex-col justify-center p-10 -mt-20">
      <div className="flex justify-center">
        <img className="w-32" src={logo} />
      </div>
      <div className="mt-2 mb-3 flex justify-center text-4xl text-[#F6DFC1] font-grandHotel">
        The world awaits your masterpiece
      </div>
        <InputMenu
        label="username"
        type="email"
        placeholder="E-mail"
        onChange={(e) => setUserInput((c) => ({...c,email:e.target.value}))}
        required={true}
      />
      <InputMenu
        label="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setUserInput((c) => ({...c,password:e.target.value}))}
        required={true}
      />
      <WarningText
        classProps={err === "" ? "invisible" : "visible"}
        text={err}
      />
      <div className="flex justify-center items-center gap-3">
      <ButtonMenu
        name="Signin"
        onClick={async () => {
          try {
            const response = await axios.post("https://backend.nsatyam95.workers.dev/api/v1/user/signin",
              userInput
            );

            localStorage.setItem("token", response.data.token);
            navigate("/home");

          } catch (e:any) {
            if (e.response.data.message) {
              e.response.error
                ? setErr(e.response.data.error)
                : setErr(e.response.data.message);
            }
          }
        }}
      />
      <div className="text-4xl text-[#FFA079] font-grandHotel" >or</div>
      <ButtonMenu
        name="Signup"
        onClick={() => {navigate("/signup")}}
      />
    </div>
  </div>
  );
}


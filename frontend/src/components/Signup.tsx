import { Link, useNavigate } from "react-router-dom";
import { InputMenu } from "../smallComponents/Input";
import { ButtonMenu } from "../smallComponents/Button";
import { useState } from "react";
import axios from "axios";
import { WarningText } from "../smallComponents/WarningText";
import { NewUserSchema } from "ansuman_medium_schema";
import logo from "../assets/Logo.svg";

export function SignUpComponent() {
  const [userInput, setUserInput] = useState<NewUserSchema>({
    name: "",
    email: "",
    password: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  return (
    <div className="z-10 bg-black/40 rounded-2xl flex flex-col justify-center p-10 -mt-20">
      <div className="flex justify-center">
        <img className="w-32" src={logo} />
      </div>
      <div className="mt-2 mb-3 flex justify-center text-4xl text-[#F6DFC1] font-grandHotel">
        The world awaits your masterpiece
      </div>
      <div className="grid grid-cols-2 gap-2">
        <InputMenu
          label="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
        />
        <InputMenu
          label="lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />
      </div>
      <InputMenu
        label="username"
        placeholder="E-mail"
        onChange={(e) => setUserInput((c) => ({ ...c, email: e.target.value }))}
        required={true}
        type="email"
      />
      <InputMenu
        label="password"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUserInput((c) => ({ ...c, password: e.target.value }))
        }
        required={true}
      />
      <WarningText
        classProps={err === "" ? "invisible" : "visible"}
        text={err}
      />
      <div className="flex justify-center items-center gap-3">
        <ButtonMenu
          name="Signup"
          onClick={async () => {
            try {
              const name = firstName + " " + lastName;
              setUserInput((c) => ({ ...c, name: name }));
              const response = await axios.post(
                "https://backend.nsatyam95.workers.dev/api/v1/user/signup",
                userInput
              );
              localStorage.setItem("token", response.data.token);
              navigate("/home");
            } catch (e: any) {
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
          name="Signin"
          onClick={() => {navigate("/signin")}}
        />
      </div>
    </div>
  );
}

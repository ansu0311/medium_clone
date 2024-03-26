import { Link, useNavigate } from "react-router-dom";
import { Title } from "../smallComponents/Title";
import { Input } from "../smallComponents/Input";
import { Button } from "../smallComponents/Button";
import { useState } from "react";
import axios from "axios";
import { WarningText } from "../smallComponents/WarningText";
import { ExistUserSchema } from "ansuman_medium_schema";

export function SignInComponent() {
  const [userInput, setUserInput] = useState<ExistUserSchema>({
    email: "",
    password: "",
  })
  const [err, setErr] = useState("");
  const navigate =useNavigate()

  return (
    <div className="h-screen w-full flex flex-col justify-center px-5 md:px-12 xl:px-40 ">
      <Title title="Login" />
      <div className="mt-2 mb-3 flex justify-center text-md lg:text-lg font-normal text-gray-600  dark:text-gray-400">
        <p className="mr-1">Don't have an account yet?</p>
        <Link className="text-decoration-line: underline" to="/signup">
          Signup
        </Link>
      </div>
      <Input
        label="username"
        type="email"
        placeholder="E-mail"
        onChange={(e) => setUserInput((c) => ({...c,email:e.target.value}))}
        required={true}
      />
      <Input
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
      <Button
        name="Sign In"
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
    </div>
  );
}


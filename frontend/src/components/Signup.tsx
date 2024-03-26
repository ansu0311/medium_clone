import { Link, useNavigate } from "react-router-dom";
import { Title } from "../smallComponents/Title";
import { Input } from "../smallComponents/Input";
import { Button } from "../smallComponents/Button";
import { useState } from "react";
import axios from "axios";
import { WarningText } from "../smallComponents/WarningText";
import { NewUserSchema } from "ansuman_medium_schema";

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
    <div className="h-screen w-full flex flex-col justify-center px-5 md:px-12 xl:px-40 ">
      <Title title="Create an account" />
      <div className="mt-2 mb-3 flex justify-center text-md lg:text-lg font-normal text-gray-600 dark:text-gray-400">
        <p className="mr-1">Already have an account?</p>
        <Link className="text-decoration-line: underline" to="/signin">
          Login
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          label="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
        />
        <Input
          label="lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />
      </div>
      <Input
        label="username"
        placeholder="E-mail"
        onChange={(e) => setUserInput((c) => ({ ...c, email: e.target.value }))}
        required={true}
        type="email"
      />
      <Input
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
      <Button
        name="Sign Up"
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

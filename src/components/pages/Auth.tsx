import { useRef, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import BulbIcon from "../icons/BulbIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Auth() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const [authType, setAuthType] = useState<"signIn" | "signUp">("signUp");

  async function onClickAuth() {
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    if ((username?.length || 0) <= 0 || (password?.length || 0) <= 0) {
      alert("Invalid Username and Password");
      return;
    }

    const backendBaseURL = import.meta.env.VITE_BACKEND_URL;

    // zpd validation
    if (authType == "signIn") {
      const response = await axios.post(
        `${backendBaseURL}/api/v1/user/signin`,
        {
          username,
          password,
        }
      );
      console.log(response);
      const token = response.data?.token || "";
      logIn(token);
      navigate("/dashboard");
    } else if (authType == "signUp") {
      const response = await axios.post(
        `${backendBaseURL}/api/v1/user/signup`,
        {
          username,
          password,
        }
      );
      console.log(response);
      const token = response.data?.token || "";
      logIn(token);
      navigate("/dashboard");
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex gap-3 items-center mb-30 absolute top-40">
        <BulbIcon
          size="xxxl"
          customClass="w-20 h-20 hover:-translate-y-1 transition-transform duration:300 hover:fill-yellow-50 hover:scale-110"
        />
        <h1 className="text-4xl font-semibold text-slate-700">Second Brain</h1>
      </div>
      <div className="bg-white p-5 rounded-xl shadow-xl shadow-secondary w-85">
        <div className="flex justify-between">
          <div
            className={`flex relative justify-center items-center border-r-slate-200 border-solid border-r flex-1 p-3 cursor-pointer rounded-xl ${
              authType == "signUp" ? "bg-secondary" : "transparent"
            }
            ${
              authType != "signUp"
                ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:rounded-xl after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300 after:ease-in"
                : ""
            }
            `}
            onClick={() => setAuthType("signUp")}
          >
            SignUp
          </div>
          <div
            className={`flex relative justify-center items-center flex-1 cursor-pointer rounded-xl ${
              authType == "signIn" ? "bg-secondary" : "transparent"
            }
            ${
              authType != "signIn"
                ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:rounded-xl after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300 after:ease-in"
                : ""
            }
            
            `}
            onClick={() => setAuthType("signIn")}
          >
            SignIn
          </div>
        </div>
        <Input
          placeholder="Username"
          size="md"
          forwardedRef={userNameRef}
          type="text"
          customClass="!mt-6"
        />
        <Input
          placeholder="Password"
          size="md"
          forwardedRef={passwordRef}
          type="text"
          customClass="!mt-6"
        />

        <Button
          text={`${authType == "signUp" ? "SignUp" : "SignIn"}`}
          size="lg"
          disabled={false}
          loading={false}
          customClass="mt-7 relative z-10 w-full text-center justify-center after:content-[''] after:absolute after:left-0 after:h-full after:bg-primary after:w-0 after:rounded-xl hover:after:w-full hover:text-white after:-z-10 after:transition-all after:duration-200"
          variant="secondary"
          onClick={onClickAuth}
        />
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import ForgetPassword from "./ForgetPassword";
import { useGlobalContext } from "../context/ProductContext";

const LoginCom = () => {
  const userName = useRef(null);
  const password = useRef(null);
  const { showForget, setShowForget } = useGlobalContext();
  const handleSubmit = () => {
    userName.current.value = "";
    password.current.value = "";
    userName.current.focus();
  };

  return (
    <>
      {showForget ? <ForgetPassword /> : null}
      <div className="w-[80vw] m-auto mt-12 xl:mt-25">
        <div className="flex flex-col w-full md:w-1/2 m-auto justify-center items-center shadow-2xl p-5">
          <div className="flex flex-col w-full gap-3 items-center">
            <h1 className="text-2xl font-semibold">Sign In</h1>
            <input
              className="w-full border p-2 outline-0 rounded-sm"
              type="text"
              placeholder="Enter username"
              autoFocus
              ref={userName}
            />
            <div className="flex flex-col w-full gap-3">
              <input
                type="password"
                placeholder="Enter password"
                className="border p-2 outline-0 rounded-sm"
                ref={password}
              />
              <p>show</p>
            </div>
            <p
              className="text-orange-400 font-semibold cursor-pointer"
              onClick={() => setShowForget(true)}
            >
              Forgot password?
            </p>
            <button
              className=" bg-orange-400 p-4 text-white rounded-sm cursor-pointer"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <hr className="border-[0.2px] w-full" />
            <button className="bg-blue-500 p-3 rounded-sm text-white cursor-pointer">
              <i className="fa-brands fa-google"></i> Sign In with Google
            </button>
          </div>
          <p>
            Don't have account?
            <span className="text-blue-500 font-bold cursor-pointer">
              Create
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginCom;

"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page: React.FC = () => {
  const [email, setemail] = useState("");
  const router = useRouter();

  const Handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const Response = await axios.post(`/api/reset-pass-email`, {
        email: email,
      });
      console.log(Response.data);
      toast.success(Response.data.message);
      router.push(`forget-password-OTP/${email}`);

      // router.replace("/Login");
    } catch (error) {
      toast.error("email is Not Find");
      console.log(error);
    }
  };
  return (
    <body className="bg-slate-950">
      <ToastContainer />
      <div className="w-full flex justify-center   items-center h-[700px] md:h-[600px]">
        <div className="resetform-container border border-b-gray-200">
          <div className="resetlogo-container  Bebas">Forgot Password</div>

          <form className="resetform" onSubmit={Handler}>
            <div className="resetform-group">
              <label className="Bebas">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                // required={true}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <button className="resetform-submit-btn" type="submit">
              Send Email
            </button>
          </form>

          <p className="resetsignup-link">
            Don&apos;t have an account?
            <a href="#" className="resetsignup-link link">
              {" "}
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </body>
  );
};

export default Page;

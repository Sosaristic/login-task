'use client'

import {useState} from "react"
import { useFormik } from "formik";
import { loginSchema } from "@/components/inputs/regex";
import { TextField } from "@/components/inputs/TextField";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "@/components/Button";
import CountryFlag from "@/components/CountryFlag";
import Link from "next/link";
import ThirdPartyAuth from "@/components/ThirdPartyAuth";

export default function page() {
  

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: loginSchema,
  });


  return (
    <main className="">
      <h2 className="font-righteous text-[2rem] text-center">Sign In to Your Account</h2>
      <form className="flex flex-col gap-4">
        <TextField
          type={"telephone"}
          startIcon={ <CountryFlag callCode={formik.values.phone}/>}
          placeholder={"+234, +233, +91"}
          label={"Phone No"}
          id={"phone"}
          name={"phone"}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <TextField
          type={"password"}
          startIcon={<RiLockPasswordFill />}
          placeholder={"password"}
          label={"Password"}
          id={"password"}
          name={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Link href={""} className="ml-auto text-primary hover:underline">Forgot Password?</Link>
        <div className="h-[3rem]">
          <Button type={"submit"} />
        </div>
      </form>
     <ThirdPartyAuth />
     <p>Not a member? <Link href={""} className="text-primary hover:underline">Register here</Link></p>
    </main>
  );
}

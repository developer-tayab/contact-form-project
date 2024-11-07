import React, { useEffect } from "react";
import FormInfo from "./FormInfo";
import FormInput from "./FromInput";

export default function Form() {


  useEffect(()=>{
    alert("Hi! 🥺 Could you take a quick look at my project and share any feedback? I’d really appreciate it! 😊")
  })



  return (
    <section className="bg-backgroundColor md:h-screen flex justify-center items-center md:py-0 py-5   ">
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-16 ">
        <FormInfo />
        <FormInput />
      </div>
    </section>
  );
}

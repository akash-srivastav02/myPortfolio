import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
      
        const onSubmit = async(data) => {
            const userInfo = {
                name:data.name,
                email:data.email,
                message:data.message
            }
            try {
                await axios.post("https://getform.io/f/bnllogwb", userInfo);
                toast.success("Your messahe has been sent");
            } catch (error) {
                console.log(error);
                toast.error("Somethinh went wrong");
            }
        }
  return (
    <>
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form className="bg-slate-200 w-92 lg:w-96 px-8 py-6 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-xl font-semibold mb-4 dark:text-gray-900">Send Your Message</h1>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input {...register("name", { required: true })} name="name" id="name" placeholder="Enter your fullname" type="text" className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">Email Address</label>
                    <input {...register("email", { required: true })} name="email" id="email" placeholder="Enter your email address" type="email" className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea {...register("message", { required: true })} name="message" id="message" placeholder="Enter your message" type="text" className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.message && <span>This field is required</span>}
                </div>
                <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:slate">Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
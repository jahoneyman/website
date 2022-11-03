import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

import { SectionTitle } from "..";
import "../../styles/connect.css";

const Connect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [sent, setSent] = useState(false);
  const [errorSent, setErrorSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const addMessage = (data) => {
    console.log("entered here");
    axios
      // .post("https://john-honeyman-db.herokuapp.com/api/create", {
      .post("http://localhost:5000/api/create", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      })
      .then((response) => {
        setLoading(false);
        setSent(true);
        setTimeout(() => {
          setSent(false);
          reset();
        }, 5000);
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setErrorSent(true);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    addMessage(data);
  };

  const onSubmitButton = () => setLoading(true);

  return (
    <div className="h-auto py-36 connect">
      <SectionTitle title="Let's Connect" color="white" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:flex justify-center items-center flex-col mt-10 w-1/2 m-auto"
      >
        <div className="md:flex justify-center items-center w-full mb-5">
          <div className="w-full">
            <input
              type="text"
              className="py-5 pl-5 mr-2 mb-5 md:mb-0 w-full md:w-[99%] rounded-lg bg-transparent-white-05 border-3 text-white placeholder:text-transparent-white-07"
              {...register("firstName", {
                required: "Please enter first name",
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
              placeholder="First Name"
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => (
                <p className="mt-2 p-2 w-max m-auto text-center text-red-500 bg-transparent-white-09 rounded-lg">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span className="ml-1 font-bold">{message}</span>
                </p>
              )}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="py-5 pl-5 w-full rounded-lg bg-transparent-white-05 border-3 text-white placeholder:text-transparent-white-07"
              {...register("lastName", {
                required: "Please enter last name",
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
              placeholder="Last Name"
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }) => (
                <p className="mt-2 p-2 w-max m-auto text-center text-red-500 bg-transparent-white-09 rounded-lg">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span className="ml-1 font-bold">{message}</span>
                </p>
              )}
            />
          </div>
        </div>
        <div className="md:flex justify-center items-center w-full mb-5">
          <div className="w-full">
            <input
              type="email"
              className="py-5 pl-5 w-full mb-5 md:mb-0 md:w-[99%] mr-2 rounded-lg bg-transparent-white-05 border-3 text-white placeholder:text-transparent-white-07"
              {...register("email", {
                required: "Please enter email",
                // eslint-disable-next-line no-useless-escape
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                maxLength: 30,
              })}
              placeholder="Email Address"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="mt-2 p-2 w-max m-auto text-center text-red-500 bg-transparent-white-09 rounded-lg">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span className="ml-1 font-bold">{message}</span>
                </p>
              )}
            />
          </div>
          <div className="w-full">
            <input
              className="py-5 pl-5 w-full rounded-lg bg-transparent-white-05 border-3 text-white placeholder:text-transparent-white-07"
              {...register("phone", {
                pattern: { pattern: /^\d{11}$/i },
              })}
              placeholder="Phone Number"
            />
          </div>
        </div>

        <textarea
          className="mx-auto pt-5 pb-10 pl-5 w-full rounded-lg bg-transparent-white-05 border-3 text-white placeholder:text-transparent-white-07 resize-none mb-1"
          {...register("message", {
            required: "Please enter message",
          })}
          placeholder="Message"
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => (
            <p className="mt-2 p-2 w-max m-auto text-center text-red-500 bg-transparent-white-09 rounded-lg">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span className=" font-bold">{message}</span>
            </p>
          )}
        />

        <div className="flex justify-start items-center mt-5 mr-auto">
          <input
            className="mr-auto bg-white text-black py-5 px-10 font-bold tracking-wider cursor-pointer transition ease-in-out duration-300 hover:py-6 hover:px-11"
            type="submit"
            value="Submit"
            onClick={onSubmitButton}
          />
          <div
            className={`text-white font-bold tracking-wide ml-3 ${
              (!sent || !errorSent) && "hidden"
            }`}
          >
            {sent && `Your e-mail has been sent! You'll be hearing from me soon. {":)"}`}
            {errorSent && `There is an error in sending a message. Please try again later.`}
            {loading && `Sending...`}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Connect;

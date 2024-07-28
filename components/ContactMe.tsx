import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:bloomspx@hotmail.com?subject={formData.subject}&body={Hi, my name is ${formData.name}. ${formData.message}`;
    }

  return (
    <div className="paddingContainer">
    <h3 className="headerTitle">Contact</h3>
    <h4 className="subtitle">
      Reach out to me through these platforms!
      </h4>
    <div className="padding-sm"></div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="flex relative flex-col text-center px-10 w-full
            md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >

      <div className="flex flex-col space-y-5">
        <div>
          <div className="flex flex-row justify-evenly items-center space-x-5">
            <SocialIcon
              className="contactButton"
              url="https://www.linkedin.com/in/pei-xuan-soh/"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 84, width: 84 }}
            />
            <SocialIcon
              className="contactButton"
              url="https://github.com/bloomspx"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 84, width: 84 }}
            />
            <SocialIcon
              className="contactButton"
              url="mailto:bloomspx@hotmail.com"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 84, width: 84 }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Type your message here"
            className="contactInput"
          />
          <button className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
    <div className="padding-lg"></div>
    <h4 className="footnote">
      Last Updated on Jul 2024 
    </h4>
    <div className="padding-sm"></div>
    </div>
  );
}

export default ContactMe;

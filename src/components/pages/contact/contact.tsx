import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import {
  ContactWrapper,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputWrapper,
  ContactTextWrapper,
  ContactSendButton,
  FiledError,
} from "./styles";

export function Contact() {
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    company: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  });
  const navigate = useNavigate();
  return (
    <ContactWrapper>
      <ContactForm>
        <ContactTitle>
          <h2>Contact me</h2>
        </ContactTitle>
        <Formik
          initialValues={{ name: "", company: "", email: "", message: "" }}
          validateOnBlur
          onSubmit={(values) => {
            emailjs
              .send(
                "service_crxreyf",
                "template_giiy5su",
                {
                  company: values.company,
                  name: values.name,
                  message: values.message,
                  email: values.email,
                },
                "yWXa4J37YrdD0bUS9"
              )
              .then((response) => {
                navigate("/");
              });
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <>
              <ContactInputWrapper>
                <ContactInput>
                  <span>Name</span>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"name"}
                    value={values.name}
                    type={"text"}
                    placeholder={"Enter your name"}
                  />
                </ContactInput>
                {touched.name && errors.name && (
                  <FiledError>{errors.name}</FiledError>
                )}
                <ContactInput>
                  <span>Company</span>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"company"}
                    value={values.company as string}
                    type={"text"}
                    placeholder={"Enter your company"}
                  />
                </ContactInput>
                {touched.company && errors.company && (
                  <FiledError>{errors.company}</FiledError>
                )}
                <ContactInput>
                  <span>Email</span>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"email"}
                    value={values.email as string}
                    type={"text"}
                    placeholder={"Enter your email"}
                  />
                </ContactInput>
                {touched.email && errors.email && (
                  <FiledError>{errors.email}</FiledError>
                )}
                <ContactTextWrapper>
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"message"}
                    value={values.message as string}
                    placeholder={"Your message"}
                  />
                </ContactTextWrapper>
                {touched.message && errors.message && (
                  <FiledError>{errors.message}</FiledError>
                )}
              </ContactInputWrapper>
              <ContactSendButton>
                <button
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit as any}
                  type="submit"
                >
                  Send
                </button>
              </ContactSendButton>
            </>
          )}
        </Formik>
      </ContactForm>
    </ContactWrapper>
  );
}

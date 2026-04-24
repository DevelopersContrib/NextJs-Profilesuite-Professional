"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ErrorBlock from "./ErrorBlock";
import SuccessBlock from "./SuccessBlock";

export default function Footer({ domain, twitter_url, fb_url, linkedin_url }) {
  const footer_text =
    "is a proud venture of Global Ventures,LLC.Join our network of performance based companies using " +
    domain +
    ".";

  const initialValues = {
    isLoading: false,
    domain: domain,
    email: "",
  };

  const initialErrors = {
    validate: false,
    emailError: "",
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [emailExist, setEmailExist] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const validateErrors = () => {
      const dataErrors = {
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "" : "Invalid Email"),
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = !Object.values(errors).some((v) => v);
    setErrors({ ...errors, ["validate"]: true });
    if (isValid) {
      setData({ ...data, ["isLoading"]: true });
      try {
        console.log("submit");
        const response = await fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setData({ ...data, ["isLoading"]: false });
        setData({ ...data, ["email"]: "" });

        if (response.ok) {
          const res = await response.json();

          if (res.status) {
            setSuccess(true);
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
    }
  };

  return (
    <>
      <footer className="ps-footer">
        <section className="ps-footer-main">
          <div className="container">
            <div className="row gy-3">
              <div className="col-xl-4">
                <h3 className="text-uppercase h5">{domain}</h3>
                <div className="ps-footer-lead">{footer_text}</div>
              </div>
              <div className="col-xl-4">
                <h3 className="text-uppercase h5">Explore</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="https://medium.com/profilesuite"
                      target="_blank"
                      className="ps-footer-link d-inline-block text-capitalize py-1"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://profilesuite.tawk.help/"
                      target="_blank"
                      className="ps-footer-link d-inline-block text-capitalize py-1"
                      rel="noopener noreferrer"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <h3 className="text-uppercase h5">Join Us Today</h3>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    {data.isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
                {errors.validate ? <ErrorBlock msg={errors.emailError} /> : null}
                {success ? <SuccessBlock msg="You successfully subscribed!" /> : null}
              </div>
            </div>
          </div>
        </section>
        <section className="ps-footer-sub">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-capitalize">
                &copy; {new Date().getFullYear()} {domain}. All rights reserved.
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

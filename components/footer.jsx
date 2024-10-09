"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import ErrorBlock from './ErrorBlock';
import SuccessBlock from './SuccessBlock'; 


export default function Footer({domain,twitter_url,fb_url,linkedin_url}) {

  const contri_link = 'https://www.contrib.com/to/'+domain;
  const footer_text = 'is a proud venture of Global Ventures,LLC.Join our network of performance based companies using '+domain+'.';
  
  const initialValues = {
		isLoading:false,
		domain:domain,
		email: "",
	}

	const initialErrors = {
		validate:false,
		emailError: "",
	};
    
	const [data, setData] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
  const [emailExist, setEmailExist] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
		const validateErrors = () => {
			const dataErrors = {
				emailError: (data.email?'':"Email is required") || (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "":"Invalid Email"),
			}
			setErrors(dataErrors);
		}
		validateErrors()
	}, [data]);
      
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

  const handleSubmit = async(event) => {
		event.preventDefault();

		const isValid = !Object.values(errors).some(v => v);
		setErrors({ ...errors, ['validate']: true })
    if(isValid ){
      setData({ ...data, ['isLoading']: true});
      try {
				console.log('submit')
        const response = await fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setData({ ...data, ['isLoading']: false});
        setData({ ...data, ['email']: ""});
        
		if (response.ok) {
          const res = await response.json()
          
          if(res.status){
			
            setSuccess(true);
            
          }
          
        }else{
          alert('An error occurred')
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
		}
	}

  
  return (
    <>
      <footer className='tw-text-white'>
        <section className='tw-bg-[#191919] tw-py-14'>
          <div className="container">
            <div className="row gy-3">
              <div className="col-xl-4">
                <h3 className="tw-uppercase tw-text-2xl">{domain}</h3>
                <div className="tw-no-underline text-secondary tw-inline-block">
                {footer_text}
                </div>
              </div>
              <div className="col-xl-4">
                <h3 className="tw-uppercase tw-text-2xl">Explore</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link href="https://medium.com/profilesuite" target="_blank" className='tw-no-underline text-secondary tw-inline-block tw-capitalize'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="https://profilesuite.tawk.help/" target="_blank" className='tw-no-underline text-secondary tw-inline-block tw-capitalize'>
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <h3 className="tw-uppercase tw-text-2xl">Join Us Today</h3>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" name="email"  placeholder="Enter your email" value={data.email} onChange={handleChange} />
                  <button class="btn btn-outline-primary" type="button" onClick={handleSubmit}>{data.isLoading? 'Submitting...':'Submit'}</button>
                </div>
                {errors.validate? (<ErrorBlock msg={errors.emailError} />): null}
                {success? (<SuccessBlock msg="You successfully subscribed!" />): null}
              </div>
            </div>
          </div>
        </section>
        <section className='tw-bg-[#111] tw-py-6'>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
              &copy; {new Date().getFullYear()} <span className="tw-capitalize">{domain}</span>. All Rights Reserved.
              </div>              
            </div>
          </div>
        </section>
      </footer>
    </>
  )

}



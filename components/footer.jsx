import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({domain,twitter_url,fb_url,linkedin_url}) {
  
  const contri_link = 'https://www.contrib.com/to/'+domain;
  const footer_text = 'is a proud venture of Global Ventures,LLC.Join our network of performance based companies using '+domain+'.';
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
                    <Link href="/" className='tw-no-underline text-secondary tw-inline-block tw-capitalize'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='tw-no-underline text-secondary tw-inline-block tw-capitalize'>
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <h3 className="tw-uppercase tw-text-2xl">Join Us Today</h3>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Enter your email" />
                  <button class="btn btn-outline-primary" type="button">Submit</button>
                </div>
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



import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShieldHalved, faBolt, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ domain }) {
  const signupUrl = `https://www.profilesuite.com/signup?domain=${domain}`;

  return (
    <section className="hero-section" aria-label="ProfileSuite hero">
      <div className="container hero-inner">
        <div className="row align-items-center justify-content-lg-between g-4 g-lg-5 gx-lg-4 gx-xl-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="hero-copy mx-auto ms-lg-0 me-lg-0 text-center text-lg-start">
            <p className="hero-eyebrow justify-content-center justify-content-lg-start">
              <span className="hero-eyebrow-dot" aria-hidden />
              Profile &amp; presence, unified
            </p>
            <h1 className="hero-title">
              <span className="hero-title-line hero-title-line-1">Your&nbsp;professional</span>
              <span className="hero-title-line hero-title-line-2">
                <span className="hero-title-accent">multiverse</span>
                &nbsp;platform
              </span>
            </h1>
            <p className="hero-description">
              Create a polished profile site in minutes—add the apps you need, showcase your work, and grow your network without
              writing code.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 justify-content-center justify-content-lg-start">
              <Link href={signupUrl} className="text-decoration-none">
                <span className="hero-signup-btn d-inline-flex align-items-center gap-2">
                  Get started free
                  <FontAwesomeIcon icon={faArrowRight} className="hero-cta-chevron" aria-hidden />
                </span>
              </Link>
            </div>
            <ul
              className="hero-trust list-unstyled d-flex flex-row flex-nowrap pt-4 mb-0 justify-content-center justify-content-lg-start"
            >
              <li className="d-flex align-items-center gap-2 text-white-50 small">
                <span className="hero-trust-icon" aria-hidden>
                  <FontAwesomeIcon icon={faBolt} />
                </span>
                <span>Launch in minutes</span>
              </li>
              <li className="d-flex align-items-center gap-2 text-white-50 small">
                <span className="hero-trust-icon" aria-hidden>
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <span>No code required</span>
              </li>
              <li className="d-flex align-items-center gap-2 text-white-50 small">
                <span className="hero-trust-icon" aria-hidden>
                  <FontAwesomeIcon icon={faUserGroup} />
                </span>
                <span>Built for professionals</span>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-items-center">
            <div className="hero-visual">
              <div className="hero-visual-glow" aria-hidden />
              <div className="hero-visual-frame">
                <Image
                  src="https://cdn.vnoc.com/profilesuite/professional.jpg"
                  alt="ProfileSuite preview—professional online presence"
                  width={640}
                  height={640}
                  className="hero-image"
                  sizes="(min-width: 992px) 24rem, 86vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

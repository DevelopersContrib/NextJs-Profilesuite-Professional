import Link from "next/link";
import Logo from "@/components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Navigation({ domain, logo }) {
  const signupUrl = `https://www.profilesuite.com/signup?domain=${domain}`;

  return (
    <>
      <div className="flash-news" role="region" aria-label="Site announcement">
        <div className="container">
          <a href="https://adao.ai" target="_blank" rel="noopener noreferrer" className="flash-news-link d-inline-flex align-items-center justify-content-center gap-2">
            <FontAwesomeIcon icon={faBullhorn} className="flash-ico" aria-hidden />
            <span>
              <b>ADAO</b> on Base is coming—learn more and get positioned on the official site.
            </span>
          </a>
        </div>
      </div>
      <header className="header-navigation">
        <div className="container">
          <Logo domain={domain} logo={logo} className="header-logo" />
          <nav className="navs d-flex align-items-center" aria-label="Main">
            <Link
              href="https://medium.com/profilesuite"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-ps"
            >
              Blog
            </Link>
            <Link
              href="https://profilesuite.tawk.help/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-ps"
            >
              Support
            </Link>
            <Link href={signupUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <span className="signup-btn d-inline-flex align-items-center gap-2">
                Sign up
                <FontAwesomeIcon icon={faArrowRight} className="nav-cta-chevron" aria-hidden />
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

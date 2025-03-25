import Link from "next/link";
import Logo from "@/components/logo";

export default function Navigation({ domain, logo }) {
  return (
    <>
      <div className="flash-news">
        <div className="container">
          <a href="https://adao.ai" target="_blank" rel="noopener noreferrer">
            <span>
              <b>Flash News!</b>
            </span>
            &nbsp;ADAO token is dropping to your Base chain soon! Get ADAO today while it&apos;s on sale!
          </a>
        </div>
      </div>
      <section className="header-navigation">
        <div className="container">
          <Logo domain={domain} logo={logo} className="header-logo" />
          <div className="navs d-flex align-items-center gap-3">
          <Link href="/partner">Partner</Link>
            <Link href="/contact">Contact</Link>            
            <Link href={`https://www.profilesuite.com/signup?domain=${domain}`} target="_blank">
              <button className="signup-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

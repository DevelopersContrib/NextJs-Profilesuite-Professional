import Link from 'next/link'
import Logo from '@/components/logo';

export default function Navigation({ domain,logo }) {
  return (
    <section className="header-navigation">
      <div className="container">
      <Logo domain={domain} logo={logo} />
        <div className="navs">
          <Link href={`https://www.profilesuite.com/signup?domain=${domain}`} target='_blank'><button className="signup-btn">Sign Up</button></Link>
        </div>
      </div>
    </section>
  );
}

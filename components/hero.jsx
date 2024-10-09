import Image from 'next/image';
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title">Your Professional Multiverse Platform</h1>
            <p className="hero-description">
            Create and build your profile website in the professional universe in 2 minutes.
            </p>
            <Link href="https://www.profilesuite.com/signup"><button className="hero-signup-btn">Sign Up Now</button></Link>
          </div>

         <div className="col-md-6">
            <Image
              src="https://cdn.vnoc.com/profilesuite/professional.jpg"
              alt="Hero Section Image"
              width={500}
              height={500}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

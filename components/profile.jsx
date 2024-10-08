import Image from 'next/image';

const profilesData = [
  {
    id: 1,
    name: "John Doe",
    intro: "I'm a computer engineer specializing in AI.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    socials: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
      youtube: "https://youtube.com/johndoe"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    intro: "I'm a digital marketer with a focus on SEO.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
      youtube: "https://youtube.com/janesmith"
    }
  },
  {
    id: 3,
    name: "Alice Johnson",
    intro: "I’m a software developer passionate about front-end.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    socials: {
      facebook: "https://facebook.com/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      instagram: "https://instagram.com/alicejohnson",
      youtube: "https://youtube.com/alicejohnson"
    }
  },
  {
    id: 4,
    name: "Bob Williams",
    intro: "I’m a UX/UI designer creating intuitive interfaces.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    socials: {
      facebook: "https://facebook.com/bobwilliams",
      twitter: "https://twitter.com/bobwilliams",
      linkedin: "https://linkedin.com/in/bobwilliams",
      instagram: "https://instagram.com/bobwilliams",
      youtube: "https://youtube.com/bobwilliams"
    }
  }
];

export default function Profile() {
  return (
    <section className="profile-section">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-12 text-center mb-4">
            <h2 className="profile-title fw-bold">Explore Profiles</h2>
            <p className="lead">Meet our talented professionals and connect with them!</p>
          </div>

          {profilesData.map(profile => (
            <div key={profile.id} className="col-md-3 d-flex">
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
        <div className="row">
            <div className='col text-center'><button className="profile-btn">View More</button></div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ name, intro, image, socials }) {
  return (
    <div className="profile-card d-flex flex-column text-center">
      <Image
        src={image}
        alt={`${name}'s Profile`}
        width={100}
        height={100}
        className="profile-image mx-auto"
      />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-intro">{intro}</p>
      <button className="view-profile-btn mt-auto">View Profile</button>
      <div className="social-icons">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
            <Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width={24} height={24} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
            <Image src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width={24} height={24} />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <Image src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width={24} height={24} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width={24} height={24} />
          </a>
        )}
        {socials.youtube && (
          <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
            <Image src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width={24} height={24} />
          </a>
        )}
      </div>
    </div>
  );
}

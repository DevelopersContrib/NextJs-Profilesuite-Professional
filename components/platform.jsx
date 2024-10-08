import Image from 'next/image';

const platformData = [
  {
    id: 1,
    title: "Profile Focused",
    description: "We built this platform with a singularity that allows you to build a profile website in 2 minutes, with the apps that you need, with no need to learn code.",
    icon: "https://cdn-icons-png.flaticon.com/256/7393/7393680.png",
  },
  {
    id: 2,
    title: "No Hidden Fees",
    description: "Our platform is free for your use and there are no hidden fees.",
    icon: "https://cdn-icons-png.flaticon.com/256/7738/7738711.png",
  },
  {
    id: 3,
    title: "Apps Integrated",
    description: "We built apps that you can use for free such as Contribution, Events, Shop, and Gigs.",
    icon: "https://cdn-icons-png.flaticon.com/256/5364/5364357.png",
  },
  {
    id: 4,
    title: "Blockchain Infused",
    description: "You can use our blockchain profile NFT builder to create your unique NFT in your own universe.",
    icon: "https://cdn-icons-png.flaticon.com/256/5270/5270185.png",
  },
];

export default function Platform() {
  return (
    <section className="platform-section bg-cgray">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-12 text-center mb-4">
          <h2 className="platform-top-title fw-bold">Our Platform Competitive Advantage</h2>
            <p className="lead">Explore the unique features that make our platform stand out.</p>
          </div>

          {platformData.map((feature) => (
            <div key={feature.id} className="col-md-3 d-flex">
              <PlatformCard {...feature} />
            </div>
          ))}
        </div>
        <div className="row">
            <div className='col text-center'><button className="platform-btn">Sign Up Now!</button></div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ title, description, icon }) {
  return (
    <div className="platform-card d-flex flex-column text-center">
      <Image
        src={icon}
        alt={`${title} Icon`}
        width={64}
        height={64}
        className="platform-icon mx-auto"
      />
      <h3 className="platform-title">{title}</h3>
      <p className="platform-description">{description}</p>
    </div>
  );
}

// app.jsx
import Image from 'next/image';

const appData = [
  {
    id: 1,
    title: "Contrib App",
    icon: "https://cdn.vnoc.com/icons/profilesuite/icon-c-logo.png",
  },
  {
    id: 2,
    title: "Blockchain NFT Profile App",
    icon: "https://cdn-icons-png.flaticon.com/256/8681/8681165.png",
  },
  {
    id: 3,
    title: "Shop App",
    icon: "https://cdn-icons-png.flaticon.com/256/5253/5253694.png",
  },
  {
    id: 4,
    title: "Community App",
    icon: "https://cdn-icons-png.flaticon.com/256/5300/5300567.png",
  },
  {
    id: 5,
    title: "Events App",
    icon: "https://cdn-icons-png.flaticon.com/256/5300/5300428.png",
  },
  {
    id: 6,
    title: "Challenge App",
    icon: "https://cdn-icons-png.flaticon.com/256/5465/5465866.png",
  },
  {
    id: 7,
    title: "Forms App",
    icon: "https://cdn-icons-png.flaticon.com/256/5300/5300737.png",
  },
  {
    id: 8,
    title: "Rss Feed App",
    icon: "https://cdn-icons-png.flaticon.com/256/5298/5298269.png",
  },
  {
    id: 9,
    title: "Newsletter App",
    icon: "https://cdn-icons-png.flaticon.com/256/5466/5466279.png",
  },
];

export default function App() {
  return (
    <section className="app-section bg-cgray">
      <div className="container">
        <div className='row'>
            <div className="col-md-12 text-center mb-4">
                <h2 className="platform-top-title fw-bold">Our Apps</h2>
                <p className="lead">Discover the powerful features that make our apps truly unique.</p>
            </div>
        </div>
        <div className="row align-items-stretch">
          {appData.map((app) => (
            <div key={app.id} className="col-md-4">
              <AppCard {...app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ title, icon }) {
  return (
    <div className="app-card d-flex flex-column text-center mb-4">
      <Image
        src={icon}
        alt={`${title} Icon`}
        width={64}
        height={64}
        className="app-icon mx-auto"
      />
      <h3 className="app-title">{title}</h3>
    </div>
  );
}

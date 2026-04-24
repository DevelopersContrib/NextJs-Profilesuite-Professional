import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleDollarToSlot,
  faLayerGroup,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const platformData = [
  {
    id: 1,
    title: "Profile first",
    description: "A focused experience so you can publish a sharp profile site in about two minutes—with the modules you need, not a full page of clutter.",
    icon: faUser,
  },
  {
    id: 2,
    title: "No hidden fees",
    description: "The core platform is free to use. We keep pricing straightforward so you can build without watching for surprise charges.",
    icon: faCircleDollarToSlot,
  },
  {
    id: 3,
    title: "Apps, integrated",
    description: "Contribution, events, shop, gigs, and more work together in one place, so your audience finds everything in a single link.",
    icon: faLayerGroup,
  },
  {
    id: 4,
    title: "Blockchain ready",
    description: "Use the profile NFT tools to turn your professional presence into a unique, ownable asset in your own universe.",
    icon: faCubes,
  },
];

export default function Platform({ domain }) {
  const signupUrl = `https://www.profilesuite.com/signup?domain=${domain}`;

  return (
    <section className="platform-section" aria-labelledby="platform-heading">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center section-head">
            <p className="section-label mb-2">The platform</p>
            <h2 id="platform-heading" className="section-title">
              Why teams choose ProfileSuite
            </h2>
            <p className="section-lead">Everything you need to present, connect, and scale a modern professional presence.</p>
          </div>
        </div>
        <div className="row g-4 g-lg-3 align-items-stretch mt-1">
          {platformData.map((feature) => (
            <div key={feature.id} className="col-md-6 col-xl-3 d-flex">
              <PlatformCard {...feature} />
            </div>
          ))}
        </div>
        <div className="row pt-2">
          <div className="col text-center">
            <Link href={signupUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <span className="platform-btn d-inline-flex align-items-center justify-content-center gap-2">Create your profile</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ title, description, icon }) {
  return (
    <article className="platform-card d-flex flex-column text-start h-100 w-100">
      <div className="platform-icon-wrap" aria-hidden>
        <FontAwesomeIcon icon={icon} className="platform-fa" />
      </div>
      <h3 className="platform-title">{title}</h3>
      <p className="platform-description">{description}</p>
    </article>
  );
}

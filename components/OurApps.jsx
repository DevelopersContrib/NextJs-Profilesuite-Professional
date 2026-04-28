import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFingerprint,
  faStore,
  faUsers,
  faCalendarDays,
  faTrophy,
  faClipboardList,
  faRss,
  faNewspaper,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const appData = [
  {
    id: 1,
    title: "Contrib",
    useBrandImage: true,
    icon: "https://cdn.vnoc.com/icons/profilesuite/icon-c-logo.png",
  },
  {
    id: 2,
    title: "Blockchain NFT profile",
    icon: faFingerprint,
  },
  {
    id: 3,
    title: "Shop",
    icon: faStore,
  },
  {
    id: 4,
    title: "Community",
    icon: faUsers,
  },
  {
    id: 5,
    title: "Events",
    icon: faCalendarDays,
  },
  {
    id: 6,
    title: "Challenge",
    icon: faTrophy,
  },
  {
    id: 7,
    title: "Forms",
    icon: faClipboardList,
  },
  {
    id: 8,
    title: "RSS feed",
    icon: faRss,
  },
  {
    id: 9,
    title: "Newsletter",
    icon: faNewspaper,
  },
];

export default function OurApps() {
  return (
    <section className="app-section" aria-labelledby="apps-heading">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center section-head app-section-head">
            <p className="section-label app-section-label mb-3">
              <FontAwesomeIcon
                icon={faPuzzlePiece}
                className="app-section-label-icon"
                aria-hidden
              />
              Modules
            </p>
            <h2 id="apps-heading" className="section-title">
              Apps that plug into your profile
            </h2>
            <p className="section-lead app-section-lead">
              Turn on shops, events, community, and more—one modular stack behind a single link.
            </p>
          </div>
        </div>
        <div className="row g-4 align-items-stretch mt-1">
          {appData.map((app) => (
            <div key={app.id} className="col-sm-6 col-lg-4 d-flex">
              <AppCard {...app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ title, icon, useBrandImage }) {
  return (
    <div className="app-card d-flex flex-row align-items-center gap-3 w-100">
      <div className="app-icon-wrap d-flex flex-shrink-0" aria-hidden>
        {useBrandImage ? (
          <Image
            src={icon}
            alt=""
            width={40}
            height={40}
            className="app-icon-brand"
          />
        ) : (
          <FontAwesomeIcon icon={icon} className="app-fa" />
        )}
      </div>
      <h3 className="app-title mb-0 text-start">{title}</h3>
    </div>
  );
}

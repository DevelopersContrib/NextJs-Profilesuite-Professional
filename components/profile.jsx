"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingState from "./LoadingState";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/profiles", { cache: "no-store" });
        if (response.ok) {
          const res = await response.json();
          const list = res?.profiles;
          setProfileData(Array.isArray(list) ? list : []);
        } else {
          setProfileData([]);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="profile-section" aria-labelledby="profiles-heading">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center section-head">
            <p className="section-label mb-2">Community</p>
            <h2 id="profiles-heading" className="section-title">
              Explore featured profiles
            </h2>
            <p className="section-lead">See how professionals present themselves—and open a live site in one click.</p>
          </div>
        </div>
        <div className="row g-4 align-items-stretch mt-1">
          {isLoading ? (
            <div className="col-12">
              <LoadingState />
            </div>
          ) : (
            profileData.length === 0 ? (
              <div className="col-12">
                <div className="profile-empty-state text-center py-2 py-md-4 max-w-lg mx-auto">
                  <p className="profile-empty-hint mb-0">
                    This spot will highlight hand-picked profile sites. Until then, explore the full directory on ProfileSuite—open live
                    profiles in one click.
                  </p>
                  <Link
                    href="https://www.profilesuite.com/discover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-btn text-decoration-none d-inline-flex align-items-center gap-2"
                  >
                    <span>Discover profiles</span>
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden />
                  </Link>
                </div>
              </div>
            ) : (
              profileData.map((profile, i) => (
                <div key={profile.id ?? profile.domain ?? i} className="col-sm-6 col-lg-3 d-flex">
                  <ProfileCard {...profile} />
                </div>
              ))
            )
          )}
        </div>
        {profileData.length > 0 && !isLoading && (
          <div className="row">
            <div className="col text-center">
              <Link href="https://www.profilesuite.com/discover" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <span className="profile-btn d-inline-flex align-items-center justify-content-center gap-2">Browse all profiles</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProfileCard({ domain, name, intro, image, socials: rawSocials }) {
  const socials = rawSocials && typeof rawSocials === "object" ? rawSocials : {};
  const [imgSrc, setImgSrc] = useState(image || "https://cdn.vnoc.com/logos/logo-ProfileSuite-2.png");

  return (
    <div className="profile-card d-flex flex-column h-100 text-center">
      <div className="profile-card-top">
        <div className="profile-avatar-wrap mx-auto">
          <Image
            src={imgSrc}
            alt=""
            width={120}
            height={120}
            className="profile-image"
            unoptimized
            onError={() => {
              setImgSrc("https://cdn.vnoc.com/logos/logo-ProfileSuite-2.png");
            }}
          />
        </div>
        <h3 className="profile-name">{name}</h3>
        <p className="profile-intro">{intro}</p>
      </div>

      <div className="social-icons mt-2 mb-3">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="social-fab" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="social-fab" aria-label="X / Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-fab" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="social-fab" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}
        {socials.youtube && (
          <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="social-fab" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        )}
      </div>

      <div className="mt-auto">
        <Link href={`https://${domain}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none w-100">
          <span className="view-profile-btn d-inline-flex w-100 align-items-center justify-content-center">View profile</span>
        </Link>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faChartLine, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export function CTABannerSection() {
  return (
    <section className="banner-section" aria-label="Staking and rewards">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="cta-slab">
              <p className="cta-slab-eyebrow d-flex align-items-center justify-content-center gap-2 mb-2">
                <span className="cta-slab-eyebrow-ico" aria-hidden>
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Ecosystem
              </p>
              <h2 className="cta-slab-title">Stake ADAO. Earn with aligned incentives.</h2>
              <p className="cta-slab-lead">
                Lock your tokens, earn ongoing rewards, and support the network. Longer lock-ups can unlock larger reward tiers—clear
                rules, no guesswork.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 gap-md-3 mt-3">
                <span className="cta-slab-pill d-inline-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faChartLine} aria-hidden />
                  Staking is live
                </span>
              </div>
              <div className="mt-4 d-flex flex-wrap align-items-center justify-content-center gap-3">
                <Link
                  href="https://agentdao.com/staking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-slab-btn d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  Stake on AgentDAO
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="small" aria-hidden />
                </Link>
                <Link
                  href="https://adao.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-slab-ghost d-inline-flex align-items-center text-decoration-none"
                >
                  Learn about ADAO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

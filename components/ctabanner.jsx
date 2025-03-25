"use client";
import Link from "next/link";

export function CTABannerSection() {
  return (
    <section
      className="pt-1 pb-5 mb-5 text-center"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div
            style={{
              background: "linear-gradient(to right, #f59e0b, #ef4444, #f59e0b)",
            }}
            className="col-md-8 position-relative text-white rounded shadow-lg p-5"
          >
            <div
              className="position-absolute start-50 translate-middle-x fs-1"
              style={{ top: "-20px" }}
            >
              ✨
            </div>

            <h2 className="display-4 fw-bold mb-4 d-flex justify-content-center align-items-center gap-3">
              🔒 Lock & Earn Big! 💰
            </h2>

            <div className="mx-auto bg-warning text-dark fw-bold fs-3 px-4 py-2 rounded border border-warning shadow">
              🚀 ADAO Staking is Live!
            </div>

            <p className="fs-5 mt-3">
              Earn passive rewards by staking ADAO. The longer you stake, the{" "}
              <span className="fw-bolder">bigger the rewards!</span>
            </p>

            <div className="mt-3">
              <Link
                href="https://agentdao.com/staking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light fw-bold fs-4 rounded shadow"
              >
                💎 Stake & Earn Now!
              </Link>
            </div>
            <div
              className="position-absolute start-50 translate-middle-x fs-1"
              style={{ bottom: "-20px" }}
            >
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

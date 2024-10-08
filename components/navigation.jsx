export default function Navigation({ domain }) {
  return (
    <section className="header-navigation">
      <div className="container">
        <div className="logo text-capitalize">{domain}</div>
        <div className="navs">
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </section>
  );
}

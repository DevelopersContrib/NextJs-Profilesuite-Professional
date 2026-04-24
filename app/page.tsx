import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Profile from "../components/profile";
import Platform from "../components/platform";
import OurApps from "../components/OurApps";
import { CTABannerSection } from "../components/ctabanner";
import { getData, getDomain } from "../lib/data";
import HeaderWidget from "@/components/HeaderWidget";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;

  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />

      <Navigation domain={domain} logo={c.data.logo} />
      <Hero domain={domain} />
      <Profile />
      <Platform domain={domain} />
      <OurApps />
      <CTABannerSection />
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}

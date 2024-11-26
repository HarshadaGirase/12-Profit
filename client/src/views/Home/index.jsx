import React, { Suspense } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Loader from "../../component/loader/Loader";

const HeroSection = React.lazy(() => import("./components/HeroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const HowToInvest = React.lazy(() => import("./components/HowInvestSection"));
const AdAnimated = React.lazy(() => import("./components/AdAnimated"));
const OurMission = React.lazy(() => import("./components/OurMission"));
const InvestmentPlanSection = React.lazy(() =>
  import("./components/InvestmentPlanSection")
);

const Home = () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <HeroSection />
      <AboutSection />
      <InvestmentPlanSection />
      <OurMission />
      <AdAnimated />
      <HowToInvest />
    </Suspense>
    <Footer />
  </>
);

export default React.memo(Home);

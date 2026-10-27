import Hero from "./component/Hero";
import WhyUs from "./component/WhyUs";
import TrustBar from "./component/TrustBar";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import AboutSummary from "./component/AboutSummary";

export default function AllTogether() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <AboutSummary />
      <Services />
      <WhyUs />
      <Portfolio />
    </div>
  );
}

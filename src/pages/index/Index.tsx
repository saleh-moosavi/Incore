import Hero from "./component/Hero";
import TrustBar from "./component/TrustBar";
import Services from "./component/Services";
import AboutSummary from "./component/AboutSummary";

export default function AllTogether() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <AboutSummary />
      <Services />
    </div>
  );
}

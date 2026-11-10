import Hero from "./component/Hero";
import Team from "./component/Team";
import Blog from "./component/Blog";
import WhyUs from "./component/WhyUs";
import TrustBar from "./component/TrustBar";
import Services from "./component/Services";
import Comments from "./component/Comments";
import FinalCTA from "./component/FinalCTA";
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
      <Comments />
      <Team />
      <Blog />
      <FinalCTA />
    </div>
  );
}

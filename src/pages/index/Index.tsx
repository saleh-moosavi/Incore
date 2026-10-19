import Hero from "./component/Hero";
import Card from "./component/Card";
import TrustBar from "./component/TrustBar";
import GlassCard from "./component/GlassCard";

export default function AllTogether() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Card />
      <GlassCard />
    </div>
  );
}

import Hero from "./component/Hero";
import Card from "./component/Card";
import Gallery from "./component/Gallery";
import GlassCard from "./component/GlassCard";

export default function AllTogether() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Card />
      <GlassCard />
    </div>
  );
}

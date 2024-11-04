import Card from "./component/Card";
import Gallery from "./component/Gallery";
import GlassCard from "./component/GlassCard";
import Header from "./component/Header";

export default function AllTogether() {
  return (
    <div>
      <Header />
      <Gallery />
      <Card />
      <GlassCard />
    </div>
  );
}

import HeaderDetail from "./HeaderDetail";
import TotalCustomer from "./TotalCustomer";

export default function Header() {
  return (
    <div className="relative z-20">
      <img
        className="w-screen h-screen object-cover"
        src="./assets/incoreHero.jpg"
        alt=""
      />
      <div className="absolute top-0 bottom-0 left-0 ring-0 w-full flex justify-around items-center">
        <HeaderDetail />
      </div>
      <TotalCustomer />
    </div>
  );
}

import Btn from "../../../components/Btn";
import { CardItem } from "./CardItem";

export default function Card() {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold">Lorem, ipsom dolor.</h2>
      <p className="text-sm font-medium text-slate-400 tracking-wide">
        Lorem ipsum dolor sit amet,
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 xl:gap-x-5 gap-y-3 px-5 xl:px-8 xl:max-w-7xl xl:mx-auto py-5 justify-items-center">
        <CardItem />
        <CardItem />
        <CardItem show />
      </div>
      <Btn text="View more" bgColor="black" txtColor="white" />
    </div>
  );
}

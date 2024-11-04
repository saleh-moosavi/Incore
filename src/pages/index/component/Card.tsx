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
        <CardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4b5c1928-b334-4e9e-b14a-5e72afad8e9c/width=450/37713713.jpeg" />
        <CardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/70b9d3f8-1f10-4b2b-90bd-bc2daf3b17ec/width=450/37600183.jpeg" />
        <CardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a3040c5-4741-41ce-a1df-9df26090c76c/width=450/37292514.jpeg" show />
      </div>
      <Btn text="View more" bgColor="black" txtColor="white" />
    </div>
  );
}

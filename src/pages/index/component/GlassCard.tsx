import Btn from "../../../components/Btn";
import GlassCardItem from "./GlassCardItem";

export default function GlassCard() {
  return (
    <div className="py-10">
      <article className="flex flex-col gap-y-1 justify-center w-full text-left items-center ">
        <h2 className="text-2xl font-bold">Lorem, ipsom dolor.</h2>
        <p className="text-sm font-medium text-slate-400 tracking-wide">
          Lorem ipsum dolor sit amet,
        </p>
      </article>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 px-5 w-full xl:max-w-7xl xl:px-8 mx-auto py-5 justify-items-center">
        <GlassCardItem />
        <GlassCardItem />
        <GlassCardItem />
        <GlassCardItem show />
      </div>
      <Btn text="View more" bgColor="black" txtColor="white" />
    </div>
  );
}

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
        <GlassCardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/085aba14-e000-426a-b8f4-14c7b58c5782/width=450/37724489.jpeg" />
        <GlassCardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/045f0906-4f56-4a8c-bbe6-8009231e9704/width=450/37465955.jpeg" />
        <GlassCardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/019e1e44-7beb-4799-ae48-2b3e2b8c338f/width=450/37313315.jpeg" />
        <GlassCardItem link="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2c25bbf0-031a-421d-a844-a8c71caed7f1/width=450/37565853.jpeg" show />
      </div>
      <Btn text="View more" bgColor="black" txtColor="white" />
    </div>
  );
}

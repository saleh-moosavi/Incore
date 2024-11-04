import Btn from "../../../components/Btn";

export default function HeaderDetail() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h1>
      <h4 className="text-white font-semibold my-5">
        Lorem ipsum, dolor sit amet consectetur
      </h4>
      <ul className="flex gap-x-5 md:gap-x-12 text-white font-bold text-sm bg-black/10 backdrop-blur-sm pl-4 md:pl-8 pr-1 py-2 rounded-full shadow-[0_-1px_0_#fff]">
        <li className="flex gap-x-1 items-center cursor-pointer">
          <select className="bg-transparent *:text-black *:text-center *:font-semibold">
            <option className="hidden">Duration</option>
            <option value="100">1 Week</option>
            <option value="500">2 Week</option>
            <option value="700">3 Week</option>
          </select>
        </li>
        <li className="flex gap-x-1 items-center cursor-pointer">
          <select className="bg-transparent *:text-black *:text-center *:font-semibold">
            <option className="hidden">Budget</option>
            <option value="100">100$</option>
            <option value="500">500$</option>
            <option value="700">700$</option>
          </select>
        </li>
        <li className="flex gap-x-1 items-center cursor-pointer">
          <select className="bg-transparent *:text-black *:text-center *:font-semibold">
            <option className="hidden">Level</option>
            <option value="100">Lvl1</option>
            <option value="500">Lvl2</option>
            <option value="700">Lvl3</option>
          </select>
        </li>
        <Btn bgColor="white" txtColor="black" text="Send" />
      </ul>
    </div>
  );
}

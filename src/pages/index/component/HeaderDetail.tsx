import { FaCaretDown } from "react-icons/fa6";
import Btn from "../../../components/Btn";

export default function HeaderDetail() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h1>
      <h4 className="text-white my-5">
        Lorem ipsum, dolor sit amet consectetur
      </h4>
      <ul className="flex gap-x-14 text-white font-bold text-sm bg-black/10 backdrop-blur-sm pl-8 pr-1 py-2 rounded-full shadow-[0_-1px_0_#fff]">
        <li className="flex gap-x-2 items-center">
          date <FaCaretDown />
        </li>
        <li className="flex gap-x-2 items-center">
          Budget <FaCaretDown />
        </li>
        <li className="flex gap-x-2 items-center">
          Quest <FaCaretDown />
        </li>
        <Btn bgColor="white" txtColor="black" text="Send" />
      </ul>
    </div>
  );
}

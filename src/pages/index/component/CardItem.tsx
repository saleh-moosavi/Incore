export function CardItem(props: { show?: boolean,link:string }) {
  return (
    <div
      className={`flex flex-col bg-white rounded-md lg:rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 transition-all duration-300 ${
        props.show ? "hidden md:flex" : ""
      }`}
    >
      <img
        className="rounded-md h-40 md:h-52 lg:h-72 object-cover object-top"
        src={props.link}
        alt=""
      />
      <div className="text-left p-2 md:p-4 lg:p-6 text-xs md:text-sm">
        <h3 className="font-bold my-2 md:my-4 lg:my-6 border-b pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="font-semibold text-slate-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptatibus inventore nesciunt
        </p>
      </div>
    </div>
  );
}

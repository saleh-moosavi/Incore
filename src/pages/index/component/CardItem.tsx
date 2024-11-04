export function CardItem(props: { show?: boolean }) {
  return (
    <div
      className={`flex flex-col bg-white rounded-md lg:rounded-lg shadow-lg ${
        props.show ? "hidden md:flex" : ""
      }`}
    >
      <img
        className="rounded-md h-40 md:h-52 lg:h-72 object-cover object-top"
        src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
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

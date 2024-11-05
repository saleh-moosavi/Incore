export default function GlassCardItem(props: { show?: boolean, link:string }) {
  return (
    <div
      className={`w-full flex justify-center relative my-2 cursor-pointer rounded-md overflow-hidden ${
        props.show ? "lg:hidden" : ""
      }`}
    >
      <img
        className="shadow-xl object-cover object-top h-72 sm:h-96 md:h-[35rem] w-full hover:scale-[1.05] transition-all duration-300"
        src={props.link}
      />
      <div className="absolute bottom-0 w-40 md:w-60 bg-white/30 backdrop-blur-[5px] mb-3 rounded-md p-2 text-left shadow-[-0.3px_-1px_1px_#fff]">
        <p className="text-xs font-medium text-white">Lorem ipsum</p>
        <h3 className="text-sm font-semibold text-white">Lorem ipsum dolor</h3>
      </div>
    </div>
  );
}

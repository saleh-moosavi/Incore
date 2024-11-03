export default function GlassCardItem(props: any) {
  return (
    <div
      className={`w-full flex justify-center relative my-2 ${
        props.show ? "lg:hidden" : ""
      }`}
    >
      <img
        className="rounded-md shadow-xl object-cover object-top h-72 sm:h-96 md:h-[35rem] w-full"
        src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
      />
      <div className="absolute bottom-0 w-40 lg:w-60 bg-white/30 backdrop-blur-[5px] mb-3 rounded-md p-2 text-left shadow-[-0.3px_-1px_1px_#fff]">
        <p className="text-xs font-medium text-white">Lorem ipsum</p>
        <h3 className="text-sm font-semibold text-white">Lorem ipsum dolor</h3>
      </div>
    </div>
  );
}

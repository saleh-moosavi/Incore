export default function GalleryImg(props: any) {
  return (
    <>
      <div className="mt-5 px-5 grid grid-cols-2 md:grid-cols-4 gap-5 justify-center xl:min-w-7xl xl:mx-auto">
        <img
          className="order-1 col-span-1 md:col-span-2 w-full xl:min-w-72 h-72 object-cover object-top rounded-md shadow-xl"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
          style={{ order: props.side }}
        />
        <img
          className="order-2 col-span-1 md:col-span-1 w-full xl:min-w-72 h-72 object-cover object-top rounded-md shadow-xl"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
        />
        <img
          className="order-2 col-span-1 w-full xl:min-w-72 hidden md:block h-72 object-cover object-top rounded-md shadow-xl"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
        />
      </div>
    </>
  );
}

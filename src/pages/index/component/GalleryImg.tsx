export default function GalleryImg(props: any) {
  return (
    <>
      <div className="mt-5 flex gap-5 justify-center px-5 md:px-0">
        <img
          className="col-span-2 w-full md:w-4/12 xl:w-3/12 h-72 object-cover object-top rounded-md shadow-xl"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
          style={{ order: props.side }}
        />
        <img
          className="order-2 w-full md:w-3/12 xl:w-2/12 h-72 object-cover object-top rounded-md shadow-xl"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
        />
        <img
          className="order-2 w-full hidden md:block md:w-3/12 xl:w-2/12 h-72 object-cover object-top rounded-md shadow-xl"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4c0ccb9b-8426-4e33-b4fe-bbca293efc32/width=450/718471.jpeg"
        />
      </div>
    </>
  );
}

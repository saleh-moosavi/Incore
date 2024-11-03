import GalleryImg from "./GalleryImg";

export default function Gallery() {
  return (
    <div className="flex flex-col py-20">
      <article className="flex flex-col gap-y-2 justify-center w-full text-left items-center mt-10 mb-5">
        <h2 className="text-2xl font-bold">Lorem, ipsom dolor.</h2>
        <p className="text-xs font-bold text-slate-400 tracking-wide">
          Lorem ipsum dolor sit amet
        </p>
      </article>
      <GalleryImg side="1" />
      <GalleryImg side="3" />
    </div>
  );
}

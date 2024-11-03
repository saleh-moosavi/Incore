export default function Customer(props: any) {
  return (
    <div className="bg-white/40 backdrop-blur-md border-t-[2px] border-r-[2px] w-36 h-24 flex flex-col justify-center shadow-xl rounded-md">
      <h1 className="text-xl font-bold mb-5">{props.title}</h1>
      <p className="text-xs font-semibold">{props.decs}</p>
    </div>
  );
}

import { HiOutlineStar } from "react-icons/hi";

export const Stars = ({ count }: { count: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <HiOutlineStar
        key={i}
        className={`h-4 w-4 ${
          i < count ? "text-amber-400 fill-amber-400" : "text-slate-600"
        }`}
      />
    ))}
  </div>
);

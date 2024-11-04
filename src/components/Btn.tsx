interface BtnType {
  text: string;
  txtColor: string;
  bgColor: string;
}
export default function Btn(props: BtnType) {
  return (
    <div>
      <a
        className="px-5 py-1 rounded-full text-sm font-semibold cursor-pointer hover:shadow-[0_0_10px_#eec754] transition-all duration-300"
        style={{ backgroundColor: props.bgColor, color: props.txtColor }}
      >
        {props.text}
      </a>
    </div>
  );
}

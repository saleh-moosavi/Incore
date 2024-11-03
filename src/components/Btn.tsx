export default function Btn(props: any) {
    return (
      <div>
        <a
          className="px-5 py-1 rounded-full text-sm font-semibold cursor-pointer"
          style={{ backgroundColor: props.bgColor, color: props.txtColor }}
        >
          {props.text}
        </a>
      </div>
    );
  }
  
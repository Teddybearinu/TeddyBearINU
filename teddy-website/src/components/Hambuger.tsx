interface HambugerProps {
  open: boolean;
  setOpen: any;
  className?: string;
}

const Hambuger: React.FC<HambugerProps> = ({ open, setOpen, className }) => {
  return (
    <div
      className={`min-w-10 w-10 md:min-w-[50px] md:w-[50px] h-10 md:h-[50px] bg-black rounded-full flex flex-col justify-center items-center cursor-pointer ${
        className ?? ""
      }`}
      onClick={() => setOpen(!open)}
    >
      <span
        data-open={open}
        className="w-4 h-px rounded-full bg-white data-[open=true]:rotate-45 data-[open=true]:translate-y-[5px] transition-all"
      ></span>
      <span
        data-open={open}
        className="w-4 h-px rounded-full bg-white mt-1 data-[open=true]:scale-x-0 transition-all"
      ></span>
      <span
        data-open={open}
        className="w-4 h-px rounded-full bg-white mt-1 data-[open=true]:-rotate-45 data-[open=true]:-translate-y-[5px] transition-all"
      ></span>
    </div>
  );
};

export default Hambuger;

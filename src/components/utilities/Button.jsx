import { IoArrowForward } from "react-icons/io5";


const Button = ({ children, btnType = "submit", variant = "primary", isIcon = true }) => {
    const buttonStyles = "px-[2px] py-2 text-[17px] h-[55px] !rounded-full flex items-center justify-center cursor-pointer ";

    const colorVariants = {
        primary: "bg-peach text-white",
    };


    return (
        <button type={btnType} className={buttonStyles + " " + colorVariants[variant]}>

            {isIcon && <div className="h-[52px] w-[52px] bg-white rounded-full flex items-center justify-center text-peach"> <IoArrowForward size={25} /> </div>}

            <span className="px-[40px]">{children}</span>
        </button>
    );
};

export { Button };

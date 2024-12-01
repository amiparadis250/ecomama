interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export const CustomButton = ({ children, onClick, className = '' }: CustomButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-[45px] py-5 bg-white text-[#004fb6] border-2 border-[#004fb6] font-normal shadow-none hover:bg-blue-50 transition-colors ${className}`}
      >
        {children}
      </button>
    );
  };
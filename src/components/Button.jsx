const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 bg-coral-red border font-montserrat text-lg leading-none rounded-full text-white border-coral-red">
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 w-5 h-5 rounded-full" />
      )}
    </button>
  );
};

export default Button;

const Navbar = ({logo}) => {  
  return (
    <div className="flex flex-row items-center justify-between h-28">
      <div className="ml-12 flex">
        <a href="/">
          <img height={112} width={112} src={logo} alt="logo" />
        </a>
        <a href="/" className="text-lg text-slate-800 font-bold pl-2 my-auto w-auto hidden md:inline">Secret Friend</a>
      </div>

          <div className="flex justify-end mr-12 gap-8 items-center">
            <a href="https://app.secretfriend.fr" className="text-lg font-semibold text-white bg-secondary-500 transition-all hover:bg-primary-500 rounded-xl px-2 py-1 shadow-lg text-center">WEB APP</a>
          </div>

    </div>
  );
};

export default Navbar;

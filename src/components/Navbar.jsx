import logo from "../../src/images/navLogo.png";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="h-[10vh] flex justify-between items-center">
          <div className="">
            <h3 className="text-2xl font-bold">Programming Blogs</h3>
          </div>
          <div className="w-10">
            <img className="h-full w-full" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

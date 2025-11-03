import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkClass =
    "sm:px-4 px-2 py-2 rounded-md font-medium transition hover:bg-blue-300";

  return (
    <header className="h-[10vh]  flex items-center justify-between border-b-2 text-center sm:text-xl text-sm border-b-black shadow-sm py-4 px-8">
      <div>
        <Link to='/'> <p className="  bg-green-600 rounded-2xl px-4 py-2 text-white hover:cursor-pointer border-none outline-none">day off</p></Link>
      </div>
      <nav className="ml-5 flex gap-2 ">
        <NavLink
          to="/request"
          end
          className={({ isActive }) =>
            `${navLinkClass} ${
              isActive ? "bg-blue-600 text-white" : "text-gray-700"
            }`
          }
        >
       Request Leave
        </NavLink>

        <NavLink
          to="/leaves"
          className={({ isActive }) =>
            `${navLinkClass} ${
              isActive ? "bg-blue-600 text-white" : "text-gray-700"
            }`
          }
        >
       Leave List
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;




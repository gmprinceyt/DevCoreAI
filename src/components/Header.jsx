import { FaHome } from "react-icons/fa";
import { MdNotStarted } from "react-icons/md";
import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <header className="w-full px-10 py-3 max-w-[1460px] m-auto">
        <nav className="text-neutral-200 flex   items-center">
          <Link to={"/"} className="flex gap-1.5 items-center ">
            <img src="icon.png" alt="logo" className="w-9 h-9" />
            <span className="text-blue-50 drop-shadow-2xl tracking-widest font-bold logo-name">
              DevCore
            </span>
          </Link>
          <li className="flex gap-10 list-none grow items-center  justify-center text-sm">
            <ul className="text-2xl">
              <Link to={"/"}>
                <FaHome />
              </Link>
            </ul >
            <ul className="text-2xl">
              <Link to={"/chats"}>
                <MdNotStarted />
              </Link>
            </ul>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Header;

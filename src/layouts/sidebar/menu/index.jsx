import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../utils/consts.jsx";
import ShowMore from "./showmore/index.jsx";
import NewPost from "./newpost/index.jsx";

export default function Menu() {
  return (
    <nav>
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className="flex group">
          {({ isActive }) => (
            <div
              className={classNames(
                "pl-3 py-4 pr-6 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>

              <div className="text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <ShowMore />
      <NewPost />
    </nav>
  );
}

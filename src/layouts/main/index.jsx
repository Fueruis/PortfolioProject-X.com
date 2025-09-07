import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import RightBar from "../rightbar";

export default function MainLayout() {
  return (
    <div className="flex w-[1265px] ml-[326px]">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <div className="max-w-[600px] w-full border-x border-[#2f3336]">
          <Outlet />
        </div>
        <RightBar />
      </main>
    </div>
  );
}
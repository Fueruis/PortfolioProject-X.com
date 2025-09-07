import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-[270px]">
      <Logo />
      <Menu />
    </aside>
  );
}

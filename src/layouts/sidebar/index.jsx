import Logo from "./logo";
import Menu from "./menu";
import ProfileButton from "../../components/profilebutton";

export default function Sidebar() {
  return (
    <aside className="flex flex-col min-h-screen w-[270px]">
      <Logo />
      <Menu />
      <ProfileButton
        avatar="assets/images/placeholder.jpeg"
        name="John Doe"
        username="@johndoe"
      />
    </aside>
  );
}

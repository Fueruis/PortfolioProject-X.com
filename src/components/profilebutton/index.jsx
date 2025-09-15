export default function ProfileButton() {
  return (
    <div className="flex group w-full outline-none">
      <button className="flex items-center space-x-2">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        <span className="hidden group-hover:block">Profile</span>
      </button>
    </div>
  );
}
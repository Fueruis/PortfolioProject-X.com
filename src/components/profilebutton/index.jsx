import { Popover } from "@headlessui/react";

export default function ProfileButton({ avatar, name, username }) {
  return (
    <Popover className="relative mt-auto mb-4">
      <Popover.Button className="pl-3 py-4 outline-none w-full flex rounded-full gap-5 hover:bg-[#eff3f41a] transition-colors">
        {/* Profil Resmi */}
          <img
            src={avatar}
            alt={name}
            className="w-[40px] h-[40px] rounded-full border border-gray-600"
          />

          {/* Kullanıcı Bilgileri */}
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="text-sm text-gray-400">{username}</span>
          </div>
          <svg viewBox="0 0 24 24" className="fill-white p-4 h-14 ml-auto"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
      </Popover.Button>
      <Popover.Panel className="w-[300px] h-[132px] absolute bottom-26 bg-black shadow-box rounded-xl">
        <button className="px-3 py-4 h-11 w-full rounded-t-xl flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="text-xl font-bold">Var olan bir hesap ekle</div>
        </button>

        <button className="px-3 py-4 h-16 w-full flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="text-xl font-bold">
            {username} hesabından çıkış yap
          </div>
        </button>
      </Popover.Panel>
    </Popover>
  );
}

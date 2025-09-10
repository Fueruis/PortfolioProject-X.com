import { Popover } from "@headlessui/react";

export default function ShowMore() {
  return (
    <Popover className="relative">
      <Popover.Button className="flex group w-full outline-none">
        <div className="pl-3 py-4 pr-6 rounded-full flex gap-5 group-hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
            </svg>
          </div>
          <div className="text-xl">Daha Fazla</div>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[318px] absolute bottom-2 left-0 bg-black shadow-box rounded-xl">
        <button className="p-4 h-14 w-full rounded-t-xl flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M12 4c-4.418 0-8 3.582-8 8 0 1.268.294 2.465.818 3.528.144.292.196.634.126.973l-.665 3.242 3.373-.63c.323-.061.647-.012.927.12C9.615 19.726 10.774 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8zM3.547 19.88zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-1.473 0-2.874-.32-4.136-.893l-3.949.74c-1.047.195-1.96-.733-1.745-1.777l.781-3.808C2.341 14.968 2 13.522 2 12z"></path>
            </svg>
          </div>
          <div className="text-xl font-bold">Sohbet</div>
        </button>
        
        <button className="p-4 h-14 w-full flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
            </svg>
          </div>
          <div className="text-xl font-bold">Listeler</div>
        </button>

        <button className="p-4 h-14 w-full flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"></path>
            </svg>
          </div>
          <div className="text-xl font-bold">Para kazanma</div>
        </button>

        <button className="p-4 h-14 w-full flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"></path>
            </svg>
          </div>
          <div className="text-xl font-bold">Reklamlar</div>
        </button>

        <button className="p-4 h-14 w-full flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z"></path>
            </svg>
          </div>
          <div className="text-xl font-bold">Sohbet odanı oluştur</div>
        </button>

        <button className="p-4 h-14 w-full rounded-b-xl flex gap-5 hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              className="fill-white w-[26.25px] h-[26.25px]"
            >
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
            </svg>
          </div>
          <div className="text-xl font-bold">Ayarlar ve gizlilik</div>
        </button>
      </Popover.Panel>
    </Popover>
  );
}

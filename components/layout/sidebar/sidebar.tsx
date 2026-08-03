import { Logo } from "./logo";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 border-r bg-white lg:flex lg:flex-col">
      <div className="border-b px-6 py-5">
        <Logo />
      </div>

      <SidebarNav />

      <SidebarFooter />
    </aside>
  );
}
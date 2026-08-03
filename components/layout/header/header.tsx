import { Notifications } from "./notifications";
import { SearchBar } from "./search";
import { UserMenu } from "./user-menu";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <SearchBar />

      <div className="flex items-center gap-2">
        <Notifications />

        <UserMenu />
      </div>
    </header>
  );
}
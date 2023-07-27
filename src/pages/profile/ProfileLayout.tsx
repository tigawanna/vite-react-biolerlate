import { Outlet } from "@tanstack/router";

interface ProfileLayoutProps {

}

export function ProfileLayout({}:ProfileLayoutProps){
return (
  <div className="w-full min-h-full flex flex-col items-center justify-center">
    <h2 className="text-4xl ">Profile Layout</h2>
    <Outlet />
  </div>
);
}

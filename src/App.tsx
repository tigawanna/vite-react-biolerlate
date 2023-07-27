import { Link, Outlet } from "@tanstack/router";
import { TanStackRouterDevtools } from "./pages/routes/Devtools";



function App() {
return (
  <div className="w-full min-h-full flex flex-col items-center justify-center">
    <div className="w-full  flex items-center justify-evenly gap-2 bg-muted">
      <Link to="/">Home</Link>
      <Link to="/profile">profile</Link>
      <Link to="/profile/tutu" >Marko Profile</Link>
    </div>

    <Outlet />
    <TanStackRouterDevtools />
  </div>
);
}

export default App

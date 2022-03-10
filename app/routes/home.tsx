import { Outlet } from "remix";

export default function Home() {
  let ref: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;

  return (
    <div>
      <div>home士大夫士大夫士大夫</div>
      <Outlet />
    </div>
  );
}

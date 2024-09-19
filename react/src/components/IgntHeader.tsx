import { IgntLink, IgntLogo } from "@ignt/react-library";
import IgntAcc from "./IgntAcc";
import { IoReloadCircle } from "react-icons/io5";

type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};
interface IgntHeaderProps {
  navItems: Array<MenuItem>;
}
export default function IgntHeader(props: IgntHeaderProps) {
  const { navItems } = props;

  return (
    <header className="flex p-5 bg-[var(--am-esg-white)] sticky top-0 left-0 right-0 z-50">
      {/* <IgntLogo className="mx-2.5" /> */}
      <a href="/" className="am-esg-logo flex items-center">
        EY Compass Observability
      </a>
      <nav className="flex flex-1 justify-between">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li className="text-3 px-4 font-normal" key={item.label}>
              <IgntLink item={item}></IgntLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="am-esg-reload text-[2rem]">
            <IoReloadCircle />
          </button>
          <IgntAcc />
        </div>
      </nav>
    </header>
  );
}

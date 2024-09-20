import { IgntLink } from "@ignt/react-library";
import { IoReloadCircle } from "react-icons/io5";
import { useResetState } from "../def-hooks/ResetStateContext";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";
import { hookOptions, perPage } from "../utils/library";
import IgntAcc from "./IgntAcc";
import { useNavigate } from "react-router-dom";

type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};
interface IgntHeaderProps {
  navItems: Array<MenuItem>;
}
export default function IgntHeaderrrr(props: IgntHeaderProps) {
  const { navItems } = props;

  const navigate = useNavigate();


  const { setResetState } = useResetState();
  const { QueryManufacturingAll, QueryTransportationAll, QueryMaterialProcessingAll, QueryRawMaterialExtractionAll } =
    useEsgobservabilitydemoEsgobservabilitydemo();

  const rawMaterialAll = QueryRawMaterialExtractionAll(
    {
      "pagination.limit": perPage,
      "pagination.offset": 0,
      "pagination.count_total": true,
      "pagination.reverse": false,
    },
    hookOptions,
    perPage,
  );

  const rawMaterialLatestCount = rawMaterialAll?.data?.pages?.[0]?.pagination?.total || "0";

  const materialProcessingAll = QueryMaterialProcessingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": false, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const materialProcessingLatestCount = materialProcessingAll?.data?.pages?.[0]?.pagination?.total || "0";

  const manufacturingAll = QueryManufacturingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const manufacturingLatestCount = manufacturingAll?.data?.pages?.[0]?.pagination?.total || "0";

  const transportationAll = QueryTransportationAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const transportationLatestCount = transportationAll?.data?.pages?.[0]?.pagination?.total || "0";

  const updateState = () => {
    setResetState([
      rawMaterialLatestCount,
      materialProcessingLatestCount,
      manufacturingLatestCount,
      transportationLatestCount,
    ]);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="flex p-5 bg-[var(--am-esg-white)] sticky top-0 left-0 right-0 z-50">
      {/* <IgntLogo className="mx-2.5" /> */}
      <span
      role="button"
      className="am-esg-logo flex items-center"
      onClick={handleClick}
      style={{ cursor: "pointer" }} // Optional: Make it clear that it's clickable
    >
      EY Compass Observability
    </span>
      <nav className="flex flex-1 justify-between">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li className="text-3 px-4 font-normal" key={item.label}>
              <IgntLink item={item}></IgntLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="am-esg-reload text-[2rem]" onClick={updateState}>
            <IoReloadCircle />
          </button>
        </div>
        <div>
          <IgntAcc />
        </div>
      </nav>
    </header>
  );
}

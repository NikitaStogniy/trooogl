import Image from "next/image";
import Search from "./Search";
import s from "./Search.module.scss";
const SearchSection = () => {
  return (
    <div
      className={`flex flex-col items-center justify-end w-full min-h-[320px] relative ${s.searchBg}`}
    >
      <div className="z-10 mb-10">
        <Search />
      </div>
      <Image src="/bg.png" alt="bg" fill />
    </div>
  );
};

export default SearchSection;

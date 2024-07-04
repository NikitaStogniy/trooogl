import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between fixed h-[60px] w-full px-4 py-2 z-10 p-4">
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={80} height={40} />
        </Link>
      </div>
    </div>
  );
};

export default Header;

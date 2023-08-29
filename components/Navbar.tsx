import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt="Dev_updates"
            width={116}
            height={43}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

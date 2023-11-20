import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="hidden md:flex transition hover:opacity-75 items-center gap-x-2"
    >
      <Image src="/logo.svg" alt="logo" height={30} width={30} />
      <span className="font-semibold text-sm pt-1 text-foreground">
        eTaskify
      </span>
    </Link>
  );
};

export default Logo;

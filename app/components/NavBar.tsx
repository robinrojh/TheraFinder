import Link from "next/link";

type TextAndUrl = {
    text: string,
    url: string
}

type NavBarProps = {
  urls?: TextAndUrl[];
};

const NavBar: React.FC<NavBarProps> = ({ urls }) => {
  if (urls) {
    return (
      <nav>
        {urls.map((value, index, array) => {
            return <Link key={index} href={value.url}>{value.text}</Link>
        })}
      </nav>
    );
  } else {
    return (
    <nav>
        <Link className={`text-2xl font-semibold m-0 max-w-[30ch] text-sm`} href="/">Home{" | "}</Link>
        <Link className={`text-2xl font-semibold m-0 max-w-[30ch] text-sm`} href="/about">About Us{" | "}</Link>
        <Link className={`text-2xl font-semibold m-0 max-w-[30ch] text-sm`} href="/sign-in">Sign In{" | "}</Link>
        <Link className={`text-2xl font-semibold m-0 max-w-[30ch] text-sm`} href="/register">Register{""}</Link>
    </nav>
    );
  }
};

export default NavBar;
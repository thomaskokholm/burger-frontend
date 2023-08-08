import Link from "next/link";
import SignInOrSignUp from "./sign-in-or-sign-up";

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <nav className="mx-auto max-w-screen-xl px-6 flex overflow-x-auto py-3 gap-3 justify-between whitespace-nowrap items-center">
        <ul className="flex gap-3 text-xl">
          <li>
            <Link href="/" title="Home">
              <strong>Burger Club</strong>{" "}
              <span className="hidden sm:inline-block ml-3 text-gray-700">
                Home of Burger Fanatics
              </span>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <SignInOrSignUp />
          </li>
        </ul>
      </nav>
    </header>
  );
}

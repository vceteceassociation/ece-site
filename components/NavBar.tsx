/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
  return (
    <div className="mx-[4%]">
      <div className="navbar items-center bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link href="/">
                  <a> Announcements </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a> Achievements </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a> Magazine </a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost">
              <Image src="/Asso.svg" width="160" height="60" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">
                <a> Announcements </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> Achievements </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> Magazine </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/">
            <a className="btn">Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar

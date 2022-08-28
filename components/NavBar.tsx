/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
  return (
    <div className="ml-[1%] mr-[2%] md:ml-[2%] md:mr-[3%] lg-ml-[3%] lg:mr-[4%]">
      <div className="navbar items-center bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden pt-3">
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
                <a
                  href="https://drive.google.com/file/d/16wjRDQ0et-wks6oTG0HZMhmuMFFhyRuA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="http://vcet.ac.in/vcetit/ecefaculty.html#faculty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/16nYLw1iMKXkH-0JDzcVyzGIi755oeB7j/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Magazine
                </a>
              </li>
              <li>
                <a href="mailto:admin@vceteceassociation.tech"> Contact Us </a>
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
          <ul className="menu menu-horizontal pt-3">
            <li>
              <a
                href="https://drive.google.com/file/d/16wjRDQ0et-wks6oTG0HZMhmuMFFhyRuA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Announcements
              </a>
            </li>
            <li>
              <a
                href="http://vcet.ac.in/vcetit/ecefaculty.html#faculty"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/16nYLw1iMKXkH-0JDzcVyzGIi755oeB7j/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Magazine
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex pt-3">
          <Link href="/">
            <a href="mailto:admin@vceteceassociation.tech" className="btn">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar

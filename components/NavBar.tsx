/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-between pt-1 pb-4 lg:gap-[4%] mx-[4%]">
      <div className="lg:flex lg:justify-start lg:items-center lg:basis-[66%]">
        <a
          className="hidden lg:block mr-8"
          target="_blank"
          href="http://vcet.ac.in"
          rel="noopener noreferrer"
        >
          <Image height="85" width="240" src="/VCET.svg" alt="vcet-logo" />
        </a>
        <Link href="/">
          <a className="hidden lg:block font-bold mr-8">Home</a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block mr-8"> Announcements </a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block"> Achievements </a>
        </Link>
      </div>
      <div className="lg:flex lg:justify-end lg:items-center lg:basis-[30%]">
        <Link href="/">
          <a className="hidden lg:block min-w-fit"> Blog </a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block px-4 min-w-fit ml-8"> Magazine </a>
        </Link>
        <Link href="/">
          <button
            type="button"
            className="hover:translate-y-1 py-2 px-4 rounded lg:ml-8 text-white text-center bg-gradient-to-r from-rose-600 to-red-600 font-bold min-w-fit"
          >
            <a> Contact Us </a>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

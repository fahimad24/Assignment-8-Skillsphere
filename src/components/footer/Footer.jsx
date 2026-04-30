import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-orange/5 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold gradient-bg-2 text-transparent bg-clip-text!">
              Skillsphere
            </h3>
            <p className="text-sm text-slate-700">
              Learn practical skills with curated courses, projects, and
              guidance designed for real-world results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <nav className="md:col-span-2 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-sm font-semibold text-slate-700">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/courses" className="hover:text-light-orange">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-light-orange">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-light-orange">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-700">
                Resources
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-light-orange">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-light-orange">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-light-orange">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Skillsphere. All rights reserved.
            </p>
            <p className="text-sm text-slate-600">Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

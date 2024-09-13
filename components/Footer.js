import Logo from './Logo'
import LogoDark from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="w-full py-5 sm:py-10 px-4  mt-14">
      <hr className="border-gray-800"></hr>
      {/* Container */}
      <div className="mt-10 flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
          {/* ::Site name */}
          <h1 className="font-title text-4xl text-center font-semibold mt-auto">
            <Logo src={LogoDark} />
            .tech
          </h1>
          {/* ::Social & copyright */}
          <div className="mt-auto flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              {/* Twitter */}
              <a
                href="https://www.twitter.com/buidlerstech"
                className="ml-3 text-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              {/* Linkedin */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/buidlers-tech"
                className="ml-3 text-gray-200"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
            {/* :::Copyright */}
            <span className="py-4 text-xs">
              &copy;2024 Buidlers.tech All Rights Reserved.
            </span>
          </div>
          {/* ::Mobile separator line */}
          <span
            className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2"
            aria-hidden="true"
          />
        </div>
        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-500 font-bold tracking-wide">
              Secciones
            </h3>
            <nav className="flex-none justify-around md:flex-col font-medium list-none">
              <li>
                <a href="#link" className="hover:text-gray-200">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/buidlers-tech"
                  className="hover:text-gray-200"
                >
                  Sobre nosotros
                </a>
              </li>
            </nav>
          </div>

          {/* ::Email */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
              Contacto
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:info@buidlers.tech">info@buidlers.tech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

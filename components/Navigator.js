import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'
import LogoDark from '../assets/logo.svg'

function MobileNavigator({ open, setOpen }) {
  return (
    <div
      className={`absolute top-20 z-50 -left-8 pl-20 rounded-tr-3xl h-screen w-screen bg-zinc-800 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col  text-white">
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Sobre nosotros
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Contacto
        </Link>
      </div>
    </div>
  )
}

export default function Navigator() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative z-50">
      <div className="fixed top-0 left-0 right-0">
        <div className="flex filter drop-shadow-md z-50 bg-black py-4 h-20 items-center px-8">
          <MobileNavigator open={open} setOpen={setOpen} />
          <div className="w-3/12 flex items-center">
            <Logo src={LogoDark} />
          </div>
          <div className="w-9/12 flex justify-end items-center mt-4">
            <div
              className="z-30 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
              onClick={() => {
                setOpen(!open)
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                  open ? 'rotate-45 translate-y-3.5' : ''
                }`}
              />
              <span
                className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                  open ? 'w-0' : 'w-full'
                }`}
              />
              <span
                className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                  open ? '-rotate-45 -translate-y-3.5' : ''
                }`}
              />
            </div>

            {/*             <div className="hidden md:flex text-stone-300 font-bold">
              <Link className="px-3" href="/about">
                SOBRE NOSOTROS
              </Link>
              <Link className="px-3" href="/contact">
                CONTACTO
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

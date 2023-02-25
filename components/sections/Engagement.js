import Image from 'next/image'
import Link from 'next/link'

export default function Engagement() {
  return (
    <div className="mt-20 relative overflow-hidden ">
      <div className="mx-auto max-w-7xl">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="h-56 w-full rounded-3xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={'/bg/51.png'}
            width="1000"
            height="1000"
            priority="true"
            alt=""
          />
        </div>

        <div className="relative z-10    bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 text-right float-right">
          <div className="relative px-2 pt-2 sm:px-2 lg:px-2"></div>

          <svg
            className="absolute inset-y-0  -left-48 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="black"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="mx-auto mt-12 max-w-7xl px-8 sm:mt-8 sm:px-6 md:mt-8 lg:mt-8 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-right">
              <h3 className="text-3xl font-bold tracking-tight text-amber-50 sm:text-3xl md:text-4xl">
                <span className="block xl:inline">
                  Participa en las charlas
                </span>
                <div>
                  <span className=" block text-amber-300 xl:inline">
                    con expertos reales y OGs
                  </span>
                  <div>
                    <span className=" block text-amber-600 xl:inline">
                      de los protocolos más populares.
                    </span>
                  </div>
                </div>
              </h3>
              <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Lorem ipsum...
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
                <div className="rounded-md shadow">
                  <Link
                    href="#"
                    className="flex font-bold w-full items-center justify-center rounded-md border border-transparent
                    bg-transparent border-amber-500 border-opacity-60 px-8 py-3 text-base text-amber-600
                     hover:bg-amber-400 md:py-4 md:px-10 md:text-lg"
                  >
                    CANAL DE ANUNCIOS
                  </Link>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#"
                    className="flex font-bold w-full items-center justify-center rounded-md border border-transparent
                     bg-transparent border-amber-500 border-opacity-60 px-8 py-3 text-base text-amber-600
                      hover:bg-amber-400 md:py-4 md:px-10 md:text-lg"
                  >
                    CHATS EN DISCORD
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function HeroMain() {
  return (
    <div className="relative overflow-hidden ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="black"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-2 pt-2 sm:px-2 lg:px-2"></div>

          <main className="mx-auto mt-10 max-w-7xl px-8 sm:mt-8 sm:px-6 md:mt-8 lg:mt-8 lg:px-8 xl:mt-12 animate-in slide-in-from-left duration-1000">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Mentes ávidas de conocimiento.
                </span>
                <div>
                  <span className="sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 block text-amber-500 xl:inline">
                    Manos listas para construir.
                  </span>
                </div>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Formamos el hub de desarrolladores Web3 en español donde la
                descentralización, calidad y colaboración son parte de nuestra
                identidad.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-5 sm:mt-0 sm:ml-3 rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-amber-500 bg- px-8 py-3
                     text-base font-bold text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    SÉ PARTE →
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex font-bold w-full items-center justify-center rounded-md border border-transparent
                     bg-transparent border-amber-500 border-opacity-60 px-8 py-3 text-base text-slate-500
                      hover:bg-amber-400 md:py-4 md:px-10 md:text-lg"
                  >
                    PRESENTACIÓN 🎬
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="animate-in fade-in duration-1000 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="  h-56 w-full rounded-3xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={'/bg/25.png'}
          width="1000"
          height="1000"
          priority="true"
          alt=""
        />
      </div>
    </div>
  )
}

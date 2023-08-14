export default function HeroMain() {
  return (
    <div className="relative py-20">
      {/* Añadir un contenedor principal con posición relativa */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full object-cover h-96 sm:h-56 md:h-80 lg:h-full lg:w-full"
      >
        <source src="/bg/back.webm" type="video/webm" />
      </video>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl md:text-6xl">
          <div className="">¡Únete a Buidlers!</div>
          <div className="mt-4 text-amber-500">
            ¿Estás listo para construir?
          </div>
        </h1>
        <div className="md:flex items-center justify-between mt-12 lg:mt-48 w-full ">
          <div
            className="px-6 py-4 sm:px-10 sm:py-8 rounded-xl text-center text-gray-100  shadow-amber-900 shadow-lg
            bg-gray-900 bg-opacity-70 
            text-base md:text-2xl max-w-xl"
          >
            Formamos el hub de desarrolladores Web3 en español donde la
            descentralización, calidad y colaboración son parte de nuestra
            identidad.
          </div>
          <div
            className="flex items-center justify-center rounded-md bg-amber-500 px-8 py-4 text-base
            text-white hover:bg-indigo-700 mt-8 md:mt-4  md:py-4 md:px-10 md:text-lg "
          >
            <a href="https://discord.gg/3WcNxGagWT">Unite a nosotros →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

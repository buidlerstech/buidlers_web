import {
  AcademicCapIcon,
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  MegaphoneIcon,
  UsersIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

// const cards = [
//   {
//     name: 'Web3',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: GlobeAltIcon
//   }
// ]

export default function Proposal() {
  return (
    // <div
    //   className="  flex flex-wrap lg:flex-nowrap text-black

    //   py-12 px-4 sm:px-6 lg:px-8 gap-4"
    // >
    //   <div className="   sm:w-full p-6 rounded-lg  bg-amber-200 space-y-4 shadow-xl shadow-yellow-700">
    //     <div style={{ textAlign: '-webkit-center' }}>
    //       <div className=" flex w-20 items-center justify-center rounded-md ">
    //         <UsersIcon className="h-6 w-6" aria-hidden="true" />
    //         <MegaphoneIcon className="h-6 w-6" aria-hidden="true" />
    //       </div>
    //     </div>
    //     <h3 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
    //       Eventos impulsados por la comunidad
    //     </h3>
    //     <p className="mt-2 text-center text-sm text-gray-600">
    //       Cada semana hosteamos conversaciones con equipos de los protocolos mas
    //       relevantes del ecosistema.
    //     </p>
    //   </div>

    //   <div className="sm:w-full p-6 rounded-lg  bg-amber-300 space-y-4 shadow-xl shadow-yellow-700">
    //     <div style={{ textAlign: '-webkit-center' }}>
    //       <div className="flex w-20 items-center justify-center rounded-md ">
    //         <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
    //         <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
    //       </div>
    //     </div>

    //     <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
    //       Forums de preguntas y respuestas
    //     </h2>
    //     <p className="mt-2 text-center text-sm text-gray-600">
    //       Estas con una duda que no te deja avanzar en un desarrollo? Entre
    //       todos te ayudamos a encontrar la solución!
    //     </p>
    //   </div>

    //   <div className="sm:w-full p-6 rounded-lg  bg-amber-400 space-y-4 shadow-xl shadow-yellow-700">
    //     <div style={{ textAlign: '-webkit-center' }}>
    //       <div className=" flex w-20 items-center justify-center rounded-md ">
    //         <AcademicCapIcon className="h-6 w-6" aria-hidden="true" />
    //         <BuildingLibraryIcon className="h-6 w-6" aria-hidden="true" />
    //       </div>
    //     </div>

    //     <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
    //       Contacto directo con teams y OGs
    //     </h2>
    //     <p className="mt-2  text-center text-sm text-gray-600">
    //       En nuestros canales de Discord categorizados por tema y nivel, tendrás
    //       la inestimable ayuda de expertos y <i>OGs</i>.
    //     </p>
    //   </div>

    //   <div className="sm:w-full p-6 rounded-lg  bg-amber-500 space-y-4  shadow-xl shadow-yellow-700">
    //     <div style={{ textAlign: '-webkit-center' }}>
    //       <div className=" flex w-20 items-center justify-center rounded-md ">
    //         <ArrowsRightLeftIcon className="h-6 w-6" aria-hidden="true" />
    //         <WrenchScrewdriverIcon className="h-6 w-6" aria-hidden="true" />
    //       </div>
    //     </div>

    //     <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
    //       Verdadero aprendizaje peer-to-peer
    //     </h2>
    //     <p className="mt-2 text-center text-sm text-gray-600">
    //       Vivimos en perma-hackathon, donde la inteligencia colectiva es nuestro
    //       ADN.
    //     </p>
    //   </div>
    // </div>
    <div
      className=" 
    mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
    "
    >
      <div className="text-center mt-14">
        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-amber-300 sm:text-4xl">
          Nuestra propuesta
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Nuestra hoja de ruta y propuesta de valor para el ecosistema
        </p>
      </div>

      <div
        className="  flex flex-wrap lg:flex-nowrap text-slate-300
  
    
    py-12 px-4 sm:px-6 lg:px-8 gap-4"
      >
        <div className="   sm:w-full p-6 rounded-lg bg-zinc-900 space-y-4 shadow-lg shadow-yellow-900">
          <div style={{ textAlign: '-webkit-center' }}>
            <div className=" flex w-20 items-center justify-center rounded-md ">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
              <MegaphoneIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h3 className="mt-2 text-center text-2xl font-bold tracking-tight text-amber-500">
            Eventos impulsados por la comunidad
          </h3>
          <p className="mt-2 text-center text-sm text-gray-400">
            Hosteamos conversaciones con equipos de los protocolos más
            relevantes del ecosistema.
          </p>
        </div>

        <div className="sm:w-full p-6 rounded-lg bg-zinc-800 space-y-4 shadow-lg shadow-yellow-900">
          <div style={{ textAlign: '-webkit-center' }}>
            <div className="flex w-20 items-center justify-center rounded-md ">
              <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
              <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-amber-500">
            Forums de preguntas y respuestas
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Estamos listos para apoyarte y brindarte las herramientas necesarias
            para superar los obstaculos.
          </p>
        </div>

        <div className="sm:w-full p-6 rounded-lg  bg-zinc-700 space-y-4 shadow-lg shadow-yellow-900">
          <div style={{ textAlign: '-webkit-center' }}>
            <div className=" flex w-20 items-center justify-center rounded-md ">
              <AcademicCapIcon className="h-6 w-6" aria-hidden="true" />
              <BuildingLibraryIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-amber-500">
            Contacto directo con equipos y protocolos
          </h2>
          <p className="mt-2  text-center text-sm text-gray-400">
            En nuestros canales de Discord categorizados por tema, tendrás la
            ayuda de protocolos, expertos y <i>OGs</i>.
          </p>
        </div>

        <div className="sm:w-full p-6 rounded-lg bg-zinc-600 space-y-4  shadow-lg shadow-yellow-900">
          <div style={{ textAlign: '-webkit-center' }}>
            <div className=" flex w-20 items-center justify-center rounded-md ">
              <ArrowsRightLeftIcon className="h-6 w-6" aria-hidden="true" />
              <WrenchScrewdriverIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-amber-500">
            Verdadero aprendizaje y colaboración
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Estamos en constante modo de innovación, donde la colaboración y la
            inteligencia colectiva son fundamentales para nosotros.
          </p>
        </div>
      </div>
    </div>
  )
}

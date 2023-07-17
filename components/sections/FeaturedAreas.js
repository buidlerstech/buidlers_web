import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Web3',
    description:
      'Exploramos y utilizamos web3 para construir aplicaciones descentralizadas, creamos contratos inteligentes, trabajamos con diversos protocolos, creamos soluciones innovadoras en esta nueva generación de la web.',
    icon: GlobeAltIcon
  },
  {
    name: 'Solidity',
    description:
      'Permite desarrollar aplicaciones descentralizadas con características como seguridad, transparencia y ejecución confiable de contratos para el ecosistema de Ethereum.',
    icon: ScaleIcon
  },
  {
    name: 'Rust / Substrate',
    description:
      'Diseñado para seguridad, rendimiento y concurrencia. Substrate es un framework escrito en Rust que permite crear blockchains personalizadas y escalables para el ecosistema de Polkadot y Kusama.',
    icon: BoltIcon
  },
  {
    name: 'Cairo / StarkNet',
    description:
      'Permite desarrollar aplicaciones escalables y seguras en StarkNet, con énfasis en la privacidad y la eficiencia.',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    name: '¡Aporta tu propia experiencia!',
    description:
      'Aportar tu experiencia es compartir conocimientos, perspectivas únicas y soluciones innovadoras para enriquecer a la comunidad.',
    icon: ChatBubbleBottomCenterTextIcon
  }
]

export default function FeaturedAreas() {
  return (
    <div className="mt-14 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-slate-500">
            NUESTROS STACKS
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-amber-300 sm:text-4xl">
            Áreas de estudio
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-amber-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-slate-300">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

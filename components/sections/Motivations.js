import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  ScaleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Contenidos dispersos',
    description:
      'Actualmente, los recursos se encuentran muy dispersos y por ello es necesario un enorme esfuerzo para conseguir respuestas adecuadas durante el aprendizaje o solución de un problema.',
    icon: CubeTransparentIcon
  },
  {
    name: 'Actividades con audiencia limitada',
    description:
      'Muchas veces hemos visto gemas escondidas, contenidos sin exposición que no tienen llegada al público que merecen. Tener las comunidades reunidas en un mismo ámbito soluciona esto.',
    icon: MegaphoneIcon
  },
  {
    name: 'Calidad y gratuidad ante todo',
    description:
      'Contenidos de altísima calidad, curados por toda la comunidad, de libre acceso y disponibilidad. Sin tarifas ni suscripciones, nunca más pagar por algo que se puede obtener directamente de las fuentes.',
    icon: SparklesIcon
  }
]

export default function Motivations() {
  return (
    <div className="bg-z inc-900 py-12 mt-20 rounded-3xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className="text-lg font-semibold text-slate-300">
            NUESTRA MOTIVACION
          </h2> */}
          <h2 className="mt-2 text-lg font-semibold text-slate-300 leading-8 tracking-tight  sm:text-2xl">
            {/* Es otra <i>&quot;comunidad&quot;</i> ? */}
            {/* NUESTRA MOTIVACION */}
            Nuestras motivaciones
          </h2>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:grid md:grid-cols-3 md:gap-x-10 lg:gap-x-28 md:gap-y-10 md:space-y-0">
            {features.map(feature => (
              <div key={feature.name} className="items-center justify-center ">
                <div style={{ textAlign: '-webkit-center' }}>
                  <feature.icon
                    className="h-24 w-24 rounded-xl bg-amber-500 text-white p-4"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-lg mt-6  font-medium leading-6 text-amber-300">
                    {feature.name}
                  </p>
                </div>
                <div className="mt-4 text-base text-justify text-gray-400">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { useState } from 'react'

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function CommunitySlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  images = [
    {
      id: 1,
      name: 'Cairo and Starknet Argentina',
      src: '/groupsLogos/logo_cairoAndStarkNetArgentina.png',
      handler: 'cairo',
      tw: 'https://www.twitter.com/'
    },
    {
      id: 2,
      name: 'Solidity Latam',
      src: '/groupsLogos/logo_solidityLatam.png',
      handler: 'soliditylatam',
      tw: 'https://www.twitter.com/solidityLatam'
    },
    {
      id: 3,
      name: 'Web3 Crew',
      src: '/groupsLogos/logo_Web3Crew.png',
      handler: 'web3crew',
      tw: 'https://www.twitter.com/'
    },
    {
      id: 4,
      name: 'Web3 Es',
      src: '/groupsLogos/logo_Web3es.png',
      handler: 'web3es',
      tw: 'https://www.twitter.com/'
    },
    // {
    //   id: 5,
    //   name: 'Rust Argentina',
    //   src: '/groupsLogos/logo_rustArgentina.png',
    //   handler: 'rustarg',
    //   tw: 'https://www.twitter.com/'
    // },
    {
      id: 6,
      name: 'Ethereum BA',
      src: '/groupsLogos/logo_ethereumBa.png',
      handler: 'ethereumba',
      tw: 'https://www.twitter.com/'
    }
    // {
    //   id: 7,
    //   name: 'Desarrolladores Substrate',
    //   src: '/groupsLogos/logo_desarrolladoresSubstrate.png',
    // handler: 'susbtratearg',
    //   tw: 'https://www.twitter.com/'
    // },
    // {
    //   id: 8,
    //   name: 'CryptoDevs Argentina',
    //   src: '/groupsLogos/logo_cryptoDevsArg.png',
    //   handler: 'cryptodevsarg',
    //   tw: 'https://www.twitter.com/'
    // }
  ]

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <div className="relative lg:mt-14">
      <div className="text-center mt-14">
        <h2 className="text-lg font-thi text-slate-500">NOSOTROS</h2>
        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-amber-300 sm:text-4xl">
          Comunidades que forman parte
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Las siguentes comunidades decidieron formar parte de algo aun mas
          grande, persiguiendo el mismo ETHOS.
        </p>
      </div>

      <div className="mt-14">
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-amber-400 z-20"
        >
          ←
        </button>
        <div className="w-1/2 h-[30vh] flex justify-center overflow-hidden relative m-auto">
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div
                  key={index}
                  className="bg-neutral-900 rounded-xl self-center p-10 animate-in slide-in-from-top"
                >
                  <div className="flex flex-row gap-12">
                    <div className="basis-1/3">
                      <Image
                        src={image.src}
                        alt=""
                        width={100}
                        height={100}
                        className="animate-fadeIn columns-1 rounded-full "
                      />
                    </div>
                    <div className="basis-2/3 text-left">
                      <h2 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl md:text-6xl">
                        {image.name}
                      </h2>
                      <div className="relative mt-4 text-gray-400">
                        <a
                          href={`https://www.twitter.com/${image.handler}`}
                          className="ml-3"
                        >
                          <span className="sr-only absolute">Twitter</span>
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-8 h-8 absolute"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                          <span className="ml-10 text-2xl">
                            @{image.handler}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <button
          onClick={handleNextSlide}
          className="absolute  right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-amber-400 z-20"
        >
          →
        </button>

        <div className="relative flex justify-center p-2">
          {images.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
                    : 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

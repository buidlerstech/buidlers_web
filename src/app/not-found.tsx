import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-8 items-center justify-center ">
        <h2 className="text-100 font-bold animate-extrude">404</h2>
        <hr className="border-t-2 border-white/50" />
        <br />
        <div className="text-white text-2xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-center md:text-left">
          <span className="text-[42pt] sm:text-[48pt] lg:text-[64pt] italic ephesis block mb-2 md:mb-0 md:inline">
            Oops!&nbsp;
          </span>
          <div className="mt-2 md:mt-4">El recurso buscado</div>
          <div className="mt-2 md:mt-4">no está disponible</div>
        </div>
      </div>
      <Link
        href="/"
        className="mt-28 px-6 py-3 text-2xl border border-stone-500 text-white rounded-lg hover:bg-stone-700 transition"
      >
        Home
      </Link>
    </div>
  );
}

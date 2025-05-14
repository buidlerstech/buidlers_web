import { SiDiscord } from "react-icons/si";

export default function JoinButton() {
  return (
    <a
      id="btnJoin"
      target="_blank"
      className="bg-sky-800 text-white px-6 py-2 rounded-full whitespace-nowrap flex gap-2 items-center
        transition-all duration-300 text-center text-xs"
      href="https://discord.gg/T3apuTrSys"
    >
      UNIRME
      <SiDiscord size={12} className="md:w-5 md:h-5" />
    </a>
  );
}

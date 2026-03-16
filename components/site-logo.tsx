import Image from "next/image";

export function SiteLogo() {
  return (
    <span className="inline-flex items-center" aria-label="Routinea logo">
      <Image
        src="/images/routinea_logo.jpg"
        alt="Routinea"
        width={476}
        height={267}
        className="h-16 w-auto object-contain mix-blend-multiply md:h-20"
        priority
      />
    </span>
  );
}

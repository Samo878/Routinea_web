import Image from "next/image";

export function SiteLogo() {
  return (
    <span className="inline-flex items-center" aria-label="Routinea logo">
      <Image
        src="/images/routinea_logo.jpg"
        alt="Routinea"
        width={480}
        height={600}
        className="h-40 w-auto rounded-sm object-contain"
        priority
      />
    </span>
  );
}

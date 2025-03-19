import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "#", icon: "/zalo.png", alt: "Zalo" },
  { href: "#", icon: "/facebook.png", alt: "Facebook" },
  { href: "#", icon: "/twitter.png", alt: "X" },
  { href: "#", icon: "/linkedin.png", alt: "LinkedIn" },
  { href: "#", icon: "/reddit.png", alt: "Reddit" },
];

export default function ShareIcons() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="font-semibold text-gray-800">Chia sẻ</p>
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="border border-[#00a651] p-2 rounded-xl hover:bg-[#e6ffee] hover:scale-110 shadow-sm transition"
        >
          <Image
            src={item.icon}
            alt={item.alt}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </Link>
      ))}
    </div>
  );
}

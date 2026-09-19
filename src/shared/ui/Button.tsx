import Link from "next/link";

type Props = {
  path: string;
  text: string;
  icon?: React.ReactNode;
  download?: boolean | string;
  target?: string;
};

export default function Button({ path, text, icon, download, target }: Props) {
  const className =
    "cursor-pointer bg-primary text-black px-5 py-2 lg:px-6 rounded-xl text-[12px] lg:text-[14px] flex gap-1 items-center font-semibold  hover:bg-emerald-500 transition-all duration-200 ease-out hover:scale-[1.03]";

  if (download || target) {
    return (
      <a
        href={path}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={className}
      >
        {text}
        {icon}
      </a>
    );
  }

  return (
    <Link href={path} className={className}>
      {text}
      {icon}
    </Link>
  );
}

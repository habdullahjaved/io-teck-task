"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { HTMLAttributes } from "react";

type IconLinkProps = {
  href: string;
  iconSrc: string;
  altKey: string; // translation key for alt text
  titleKey?: string; // optional translation key for title
  size?: number; // size of the icon (square)
  className?: string;
} & HTMLAttributes<HTMLAnchorElement>;

export default function IconLink({
  href,
  iconSrc,
  altKey,
  titleKey,
  size = 24,
  className,
  ...rest
}: IconLinkProps) {
  const t = useTranslations("IconLink"); // should exist in your messages files

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      <Image
        src={iconSrc}
        alt={t(altKey)}
        title={titleKey ? t(titleKey) : undefined}
        width={size}
        height={size}
        className={className}
      />
    </Link>
  );
}

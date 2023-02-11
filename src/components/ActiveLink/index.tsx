"use client"
import Link, { LinkProps } from "next/link";
import { usePathname } from 'next/navigation';

interface ActiveLinkProps extends LinkProps {
  name: string;
  activeClassName: string;
}

export function ActiveLink({name, activeClassName, ...rest }: ActiveLinkProps) {
  const asPath  = usePathname();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} className={className}>
      {name}
    </Link>
  );
}
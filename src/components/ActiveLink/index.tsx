import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  name: string;
  activeClassName: string;
}

export function ActiveLink({name, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} className={className}>
      {name}
    </Link>
  );
}
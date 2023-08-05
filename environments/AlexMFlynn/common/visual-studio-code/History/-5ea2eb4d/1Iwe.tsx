import { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

export type BaseLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface LinkProps {
  children: ReactNode;
  href: BaseLinkProps['href'];
}

export const Link: FC<LinkProps> = ({ children, href }) => {
  return <a
    className="br-link"
    href={href}
  >
    {children}
  </a>;
};

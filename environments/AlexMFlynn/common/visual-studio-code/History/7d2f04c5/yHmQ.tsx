import { FC, PropsWithChildren } from 'react';
import { Icon, MaterialIcon } from '../icon';
import cssClasses from './link.module.scss';

export interface LinkProps extends PropsWithChildren {
  /** if set to true, will open the link in a new tab */
  openNewTab?: boolean;
}

export interface ExternalLinkProps extends LinkProps {
  /** 
   * Used to set an external URL reference 
   * (will open link in a new tab by default) 
   * */
  url: string;
  /** Used to prevent the simultaneous use of route and url props */
  route?: never;
}

export interface InternalLinkProps extends LinkProps {
  /** Used to prevent the simultaneous use of route and url props */
  url?: never;
  /** Used to set an internal route reference */
  route: string;
}

/**
 * @component Displays a link
 *
 * @example
 * <Link
 *  route='/someroute'
 *  openNewTab
 * >
 *   I can take you places
 * </Link>
 */
export const Link: FC<ExternalLinkProps | InternalLinkProps> = ({
  children,
  url,
  route,
  openNewTab
}: ExternalLinkProps | InternalLinkProps) => {
  if (url && openNewTab == null) {
    openNewTab = true;
  }

  return (
    <a
      className={cssClasses.link}
      target={(openNewTab) ? '_blank' : undefined }
      href={url || route}
      rel='noreferrer'
    >
      <span className={cssClasses.underline}>{children}</span>
      {openNewTab && <> <Icon icon={MaterialIcon.openInNew} /></>}
    </a>
  );
};

import { PropsWithChildren, ReactElement } from 'react';
import { useTheme } from 'react-jss';
import { Icon, MaterialIcon } from '../icon';
import { createUseThemedStyles } from '../theme';

export const useStyles = createUseThemedStyles()({
  link: ({ theme }) => {
    return { 
      color: theme.link,
      textDecoration: 'none'
    };
  },
  underline: {
    textDecoration: 'underline'
  }
});

export interface LinkProps extends PropsWithChildren {
  /** if set, will open the link in a new tab */
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
 *  url='https://someurl.com'
 *  openNewTab
 * >
 * I can take you places
 * </Link>
 */
export const Link = ({
  children,
  url,
  route,
  openNewTab = false
}: ExternalLinkProps | InternalLinkProps): ReactElement => {
  const classes = useStyles({
    theme: useTheme()
  });
  if(url && !openNewTab) {
    openNewTab = true;
  }
  return (
    <a
      className={classes.link}
      target={openNewTab ? '_blank' : undefined }
      href={url || route}
      rel='noreferrer'
    >
      <span className={classes.underline}>{children}</span> 
      {openNewTab && <> <Icon icon={MaterialIcon.openInNew} /></>}
    </a>
  );
};

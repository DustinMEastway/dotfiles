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
  contrast: ({ theme }) => {
    return { 
      color: theme.linkContrast,
      textDecoration: 'none'
    };
  },
  underline: {
    textDecoration: 'underline'
  }
});

export interface LinkProps extends PropsWithChildren {
  /**
   * Used to specify where to open the link, mainly:
   *
   * '_self' (default): opens link in the same frame it was clicked
   *
   * '_blank': opens link in new tab
   */
  openNewTab?: boolean;
  /** Use to enable the contrast color for the link */
  contrast?: boolean;
}

export interface ExternalLinkProps extends LinkProps {
  /** Used to set the external URL reference */
  url: string;
  /** Used to prevent the simultaneous use of route and url props */
  route?: never;
}

export interface InternalLinkProps extends LinkProps {
  /** Used to prevent the simultaneous use of route and url props */
  url?: never;
  /** Used to set the internal route reference */
  route: string;
}

/**
 * @component Displays a link
 *
 * @example
 * <Link
 *  url='https://someurl.com'
 *  target='_blank'
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
  if(url) {openNewTab = true; }
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

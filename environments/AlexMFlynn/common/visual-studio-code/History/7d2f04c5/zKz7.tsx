import { PropsWithChildren, ReactElement } from "react";
import { useTheme } from "react-jss";
import { Icon, MaterialIcon } from "../icon";
import { createUseThemedStyles } from '../theme';


export const useStyles = createUseThemedStyles() ({
  primary: ({theme}) => {
    return {color: theme.linkPrimary};
  },
  contrast: ({theme}) => {
    return {color: theme.linkContrast};
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
  target?: '_blank' | '_self' | '_top' | '_parent';
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
 *  contrast
 * >
 * I can take you places
 * </Link>
 */
export const Link = ({
  children,
  url,
  route,
  target = '_self',
  contrast = false
}: ExternalLinkProps | InternalLinkProps): ReactElement => {
  const classes = useStyles({
    theme: useTheme()
  });
  const isNewTab = (target === '_blank');
  return (
    <a
      className={(contrast ? classes.contrast : classes.primary)}
      target={target}
      href={url || route}
    >
      {children}
      {isNewTab ? <Icon icon={MaterialIcon.openInNew} /> : null}
    </a>
  );
};

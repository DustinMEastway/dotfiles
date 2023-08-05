import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode
} from 'react';
import { useTheme } from 'react-jss';
import { createUseThemedStyles } from '../theme';

/** Color of @see Button. */
export enum ButtonColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}

/** Style of the @see Button. */
export enum ButtonKind {
  border = 'border',
  fill = 'fill'
}

export interface ButtonStyleProps {
  themeColor: ButtonColor;
}

export function setHexOpacity(color: string, opacity: number): string {
  let base16Opacity = Math.floor((opacity * 255)).toString(16);
  base16Opacity = (base16Opacity.length < 2) ? `0${base16Opacity}` : base16Opacity;
  return `${color}${base16Opacity}`;
}

export const useStyles = createUseThemedStyles<ButtonStyleProps>()({
  button: ({ theme }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75em 1.5em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    whiteSpace: 'pre-wrap',
    verticalAlign: 'middle',
    outline: 'none',
    transition: 'background 0.2s',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    overflow: 'visible',
    ['&:focus-visible']: {
      outline: `1.5px solid ${theme.focusColor}`,
      outlineOffset: '1px'
    },
    ['&:disabled']: {
      cursor: 'not-allowed'
    }
  }),
  [ButtonKind.fill]: ({ theme, themeColor }) => ({
    backgroundColor: theme[themeColor],
    color: theme[`${themeColor}Contrast`],
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.5)',
    ['&:not([disabled])']: {
      ['&:hover']: {
        opacity: 0.8,
        boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)'
      },
      ['&:active']: {
        opacity: 0.9,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.1)'
      }
    }
  }),
  [ButtonKind.border]: ({ theme, themeColor }) => {
    const selectedColor = theme[themeColor];
    return ({
      color: selectedColor,
      border: `0.5px solid ${selectedColor}`,
      ['&:not([disabled])']: {
        ['&:hover']: {
          opacity: 0.8,
          backgroundColor: setHexOpacity(theme.color, 0.2)
        },
        ['&:active']: {
          opacity: 1,
          backgroundColor: setHexOpacity(theme.color, 0.1)
        }
      },
      ['&:disabled']: {
        backgroundColor: setHexOpacity(theme.color, 0.2)
      }
    });
  },
  loading: {
    opacity: 0.6
  }
});

export interface ButtonProps extends PropsWithChildren {
  /** Event that is emit emitted when the button is clicked. */
  onClick: MouseEventHandler<HTMLButtonElement>;
  /** Select color of button @default ButtonColor.primary. */
  color?: ButtonColor;
  /** Style of button to display @default ButtonKind.fill. */
  kind?: ButtonKind;
  /** Disables the button and displays @see loadingChildren. */
  isLoading?: boolean;
  /** Displays after spinner when @see isLoading is `true`. */
  loadingChildren?: ReactNode;
}

/**
 * @component for displaying button
 *
 * @example
 * <Button
 *   color={ButtonColor.primary}
 *   kind={ButtonKind.fill}
 *   onClick={():void => console.log('clicked')}
 *   loadingChildren='children are loading'
 * >
 *   Children
 * </Button>
 */
export const Button: FC<ButtonProps> = ({
  children,
  color = ButtonColor.primary,
  isLoading,
  kind = ButtonKind.fill,
  loadingChildren,
  onClick
}) => {
  const classes = useStyles({
    theme: useTheme(),
    themeColor: color
  });

  const classNames = `
      ${classes[kind]}
      ${(isLoading) ? classes.loading : ''}
      ${classes.button}
  `;

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={classNames}
    >
      {isLoading ? (
        <>
          {loadingChildren}
        </>
      ) : children}
    </button>
  );
};

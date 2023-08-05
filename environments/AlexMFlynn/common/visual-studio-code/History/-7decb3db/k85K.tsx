import { FC } from 'react';
import { useTheme } from 'react-jss';
import { createUseThemedStyles } from '../theme';
import { FontFamily } from './font-family';
import { MaterialIcon } from './material-icon';

interface IconBaseProps {
  /** Used to add additional classes to the icon. */
  className?: string;
  /** Used to override the color used for the font (default: 'inherit').  */
  color?: string;
  /** Used to override the display property used. default: inline-block */
  display?: string;
  /** Used to override the size of the icon (default: 1em). */
  size?: number | string;
}

export type IconProps = IconBaseProps & {
  /** The character to be used from the material font. */
  icon: MaterialIcon;
  /** The font set to be used for this icon. Currently we only support material-regular. */
  font?: FontFamily.materialRegular;
};

const useStyles = createUseThemedStyles<IconProps>()({
  icon: ({ color, font, size }) => ({
    color: (color) ? color : 'inherit',
    display: 'inline-block',
    fontSize: (size) ? size : '1em',
    fontFamily: font,
    verticalAlign: 'middle'
  })
});

/**
 * @component Displays an icon.
 *
 * @example
 * return (
 *   <Icon
 *     icon={MaterialIcon.lightMode}
 *     font={FontFamily.materialRegular}
 *     size={21}
 *   />
 * )
 */
export const Icon: FC<IconProps> = (props) =>  {
  const {
    className,
    font = FontFamily.materialRegular,
    icon
  } = props;
  const classes = useStyles({
    ...props,
    font,
    theme: useTheme()
  });

  return (
    <span
      className={`${classes.icon} ${className}`}
    >
      {icon}
    </span>
  );
};

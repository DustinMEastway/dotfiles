import { PropsWithChildren, ReactElement } from 'react';
import { useTheme } from 'react-jss';
import { createUseThemedStyles } from '../theme';

export interface labelStyleProps {
  isContrast: boolean;
}

export const useStyles = createUseThemedStyles<labelStyleProps>()({
  error: ({ theme, isContrast }) => {
    return {
      color: (isContrast) ? theme.errorContrast : theme.error
    };
  },
  required: () => {
    return {
      color: 'red',
      display: 'inline'
    };
  },
  hidden: { display: 'none' }
});

export interface LabelProps extends PropsWithChildren {
  /** used in place of 'for' to connect to another element. */
  bind: string;
  /** if true, will display a red asterisk. */
  required?: boolean;
  /** if true, will turn child text red. */
  error?: boolean;
  /** used to select contrast for error color */
  contrast?: boolean;
}

/**
 * @component for dispalying a label
 * 
 * @example
 * <Label
 *  bind='elementId'
 *  required
 *  error
 *  contrast
 * >
 *  {children}
 * </Label>
 */
export function Label({
  children,
  bind,
  required,
  error,
  contrast = false
}: LabelProps): ReactElement {
  const classes = useStyles({
    theme: useTheme(),
    isContrast: contrast
  });

  return (
    <label
      htmlFor={bind}
      className={(error) ? classes.error : undefined}
    >
      {children}
      <p className={(required) ? classes.required : classes.hidden}>
        *
      </p>
    </label>
  );
}

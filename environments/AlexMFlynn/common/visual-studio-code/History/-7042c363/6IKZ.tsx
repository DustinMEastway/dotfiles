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
  required: ({theme}) => {
    return {
      color: theme.error,
      display: 'inline'
    };
  },
  hidden: { display: 'none' }
});

export interface LabelProps extends PropsWithChildren {
  /** used to connect label to another element. */
  htmlFor: string;
  /** if true, will display a red asterisk. */
  required?: boolean;
  /** if true, will turn child text red. */
  error?: boolean;
}

/**
 * @component for dispalying a label
 * 
 * @example
 * <Label
 *  htmlFor='elementId'
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

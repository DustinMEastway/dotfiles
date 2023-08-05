import { PropsWithChildren, ReactElement } from 'react';
import { useTheme } from 'react-jss';
import { createUseThemedStyles } from '../theme';

export const useStyles = createUseThemedStyles<labelStyleProps>()({
  error: ({ theme }) => {
    return {
      color: theme.error
    };
  },
  required: ({theme}) => {
    return {
      '::after': {
        content: '*',
        color: theme.error
      }
      
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
 * >
 *  {children}
 * </Label>
 */
export function Label({
  children,
  htmlFor,
  required,
  error
}: LabelProps): ReactElement {
  const classes = useStyles({
    theme: useTheme()
  });
  const getClasses = (required: boolean, error: boolean): string => {
    return `${required ? classes.required : ''} ${error ? classes.error : ''}`;
};

  return (
    <label
      htmlFor={htmlFor}
      className={getClasses(required, error)}
    >
      {children}
    </label>
  );
}

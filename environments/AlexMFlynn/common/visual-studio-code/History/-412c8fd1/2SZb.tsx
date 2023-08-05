import { FC, PropsWithChildren, ReactElement } from 'react';
import cssClasses from './label.module.scss';

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
export const Label: FC<LabelProps> ({
  children,
  htmlFor,
  required = false,
  error = false
}) => {
  const getClasses = (required: boolean, error: boolean): string => {
    return `${required ? cssClasses.required : ''} ${error ? cssClasses.error : ''}`;
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

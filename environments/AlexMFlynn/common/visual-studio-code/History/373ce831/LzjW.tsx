import { FC, PropsWithChildren } from 'react';
import { StorybookLayout } from '../../types';
import cssClasses from './inner-themed-container.module.scss';

export interface InnerThemedContainerProps extends PropsWithChildren {
  layout: StorybookLayout;
}

/** Inner themed container used to apply theming and layout. */
export const InnerThemedContainer: FC<InnerThemedContainerProps> = ({
  children,
  layout
}) => {
  return (
    <div className={cssClasses.themeContainer}>
      <div className={cssClasses[layout]}>
        {children}
      </div>
    </div>
  );
};

import { FC, PropsWithChildren } from 'react';
import { StorybookLayout } from '../../types';
<<<<<<< HEAD
import cssClasses from './inner-themed-container.module.scss';
=======

const useStyles = createUseThemedStyles<InnerThemedContainerProps>()({
  positionContainer: ({ layout }) => {
    if (layout !== StorybookLayout.centered) {
      return {
        height: '100%',
        width: '100%'
      };
    }

    return {
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    };
  },
  themeContainer: ({ layout, theme }) => ({
    backgroundColor: theme.background,
    color: theme.color,
    height: '100%',
    padding: layout === StorybookLayout.padded ? '1rem' : '0',
    position: 'relative',
    width: '100%'
  })
});
>>>>>>> 1bd8028 (created drawer-sidenav)

export interface InnerThemedContainerProps extends PropsWithChildren {
  layout: StorybookLayout;
}

/** Inner themed container used to apply theming and layout. */
export const InnerThemedContainer: FC<InnerThemedContainerProps> = ({
  children,
  layout
}) => {
  return (
<<<<<<< HEAD
    <div className={cssClasses.themeContainer}>
      <div className={cssClasses[layout]}>
        {children}
      </div>
=======
    <div className={classes.themeContainer}>
      <div className={classes.positionContainer}>{children}</div>
>>>>>>> 1bd8028 (created drawer-sidenav)
    </div>
  );
};

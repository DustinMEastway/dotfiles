import { FC, PropsWithChildren } from 'react';
import { StorybookLayout } from '../../types';

const useStyles = createUseThemedStyles<InnerThemedContainerProps>()({
  positionContainer: ({ layout }) => {
    if (layout !== StorybookLayout.centered) {
      return;
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
    padding: (layout === StorybookLayout.padded) ? '1rem' : '0',
    position: 'relative',
    width: '100%'
  })
});

export interface InnerThemedContainerProps extends PropsWithChildren {
  layout: StorybookLayout;
}

/** Inner themed container used to apply theming and layout. */
export const InnerThemedContainer: FC<InnerThemedContainerProps> = ({
  children,
  layout
}) => {
  return (
    <div className={classes.themeContainer}>
      <div className={classes.positionContainer}>
        {children}
      </div>
    </div>
  );
};

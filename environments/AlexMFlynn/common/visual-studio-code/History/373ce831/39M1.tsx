import { FC, PropsWithChildren } from 'react';
import { useTheme } from 'react-jss';
import { createUseThemedStyles } from '../../../src/theme';
import { StorybookLayout } from '../../types';

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

export interface InnerThemedContainerProps extends PropsWithChildren {
  layout?: StorybookLayout;
}

/** Inner themed container used to apply theming and layout. */
export const InnerThemedContainer: FC<InnerThemedContainerProps> = (props) => {
  const { children } = props;
  const classes = useStyles({
    ...props,
    theme: useTheme()
  });

  return (
    <div className={classes.themeContainer}>
      <div className={classes.positionContainer}>{children}</div>
    </div>
  );
};

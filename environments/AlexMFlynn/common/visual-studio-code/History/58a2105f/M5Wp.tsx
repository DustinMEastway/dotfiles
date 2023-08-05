import { FC, PropsWithChildren} from 'react';
import cssClasses from './sidenav.module.scss';


export interface DrawerSidenavProps extends PropsWithChildren {
  side: 'left' | 'right';
  isOpen?: boolean;
  width?: 'short' | 'full';
}

const getClass = (sideClass: string, width: string, isOpen: boolean): string => {
  return `${cssClasses.sidenav} ${cssClasses?.[width]} ${cssClasses?.[sideClass]} ` +
   `${isOpen ? '' : cssClasses.closed}`;
};

export const DrawerSidenav: FC<DrawerSidenavProps> = ({
  side,
  children,
  isOpen = false,
  width = 'short'
}) => {
  return (
    <div className={getClass(side, width, isOpen)}>
      {children}
    </div>  
  );
}; 

import { FC, PropsWithChildren} from 'react';
import cssClasses from './sidenav.module.scss';


export interface SidenavProps extends PropsWithChildren {
  
  side: 'left' | 'right';
}

/** Displays a sticky side panel that does NOT overlay elements on the page */
export const Sidenav: FC<SidenavProps> = ({
  side,
  children
}) => {
  return (
    <div className={`${cssClasses.sidenav} ${cssClasses?.[side]}`}>
      {children}
    </div>  
  );
}; 
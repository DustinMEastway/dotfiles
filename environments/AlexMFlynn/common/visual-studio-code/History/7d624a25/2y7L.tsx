import { FC, PropsWithChildren, useEffect, useState } from 'react';
import cssClasses from './drawer.module.scss';
import { makeClassName } from '../shared';

export enum drawerSize{
  sm = '20%',
  md = '30%',
  lg = '40%',
  half = '50%'
}

export interface DrawerProps extends PropsWithChildren {
  /** Determines which side of the window the drawer will appear */
  side: 'left' | 'right';
  /** Come on guys... Take a guess */
  isOpen?: boolean;
  /** Determines the width of the drawer */
  width?: drawerSize;
}

export interface Overlay extends DrawerProps{
  /** Used to distinguish if drawer will overlay or push page content */
  parentId?: never;
}

export interface Push extends DrawerProps{
  /** Used to push content from parent element */
  parentId: string;
}

const moveContent = (
  side: string, 
  isOpen: boolean, 
  parent: HTMLElement,
  width: drawerSize
): void => {
  if(side === 'left') {
    parent.style.transition = 'margin-left .5s';
    parent.style.marginLeft = (isOpen) ? `${width}` : '0';
  } else { 
    parent.style.transition = 'margin-right .5s';
    parent.style.marginRight = (isOpen) ? `${width}` : '0';
  }
};

const getById = (parentId: string | undefined): HTMLElement | null => {
  return (parentId) ? document.getElementById(parentId) : null;
};

/** @component Displays a side panel */
export const Drawer: FC<Overlay | Push> = ({
  side,
  children,
  isOpen = false,
  width,
  parentId
}) => {
  const [parent, setParent] = useState(getById(parentId));

  useEffect(() => {
    setParent(getById(parentId));
  }, [parentId]);

  useEffect(() => {
    if(parent && width) {
      moveContent(side, isOpen, parent, width);
    }
  }, [isOpen, parent, parentId, side, width]);

  return (
    <div style={{width: width}} className={makeClassName(
      cssClasses.drawer,
      cssClasses.width,
      cssClasses.side,
      {
        [cssClasses.closed]: !isOpen
      }
    )}>
      {children}
    </div>  
  );
};
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import cssClasses from './drawer.module.scss';
import { makeClassName } from '../shared';

export enum drawerSize{
  sm = '20%',
  md = '30%',
  lg = '40%',
  half = '50%',
  xl = '80%',
  full = '100%'
}
const {sm, md, lg, half, xl, full} = drawerSize;

export interface DrawerProps extends PropsWithChildren {
  /** Determines which side of the window the drawer will appear */
  side: 'left' | 'right';
  /** Come on guys... Take a guess */
  isOpen?: boolean;
}

export interface Overlay extends DrawerProps{
  /** Used to distinguish if drawer will overlay or push page content */
  parentId?: never;
  /** Determines the width of the drawer */
  width?: sm | 'md' | 'lg' | 'full';
}

export interface Push extends DrawerProps{
  /** Used to push content from parent element */
  parentId: string;
  /** Determines the width of the drawer */
  width?: sm | 'md' | 'lg';
}

const moveContent = (
  side: string, 
  isOpen: boolean, 
  parent: HTMLElement
): void => {
  if(side === 'left') {
    parent.style.transition = 'margin-left .5s';
    parent.style.marginLeft = (isOpen) ? '20%' : '0';
  } else { 
    parent.style.transition = 'margin-right .5s';
    parent.style.marginRight = (isOpen) ? '20%' : '0';
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
  width = sm,
  parentId
}) => {
  const [parent, setParent] = useState(getById(parentId));

  useEffect(() => {
    setParent(getById(parentId));
  }, [parentId]);

  useEffect(() => {
    if(parent) {
      moveContent(side, isOpen, parent);
    }
  }, [isOpen, parent, parentId, side]);

  return (
    <div className={makeClassName(
      cssClasses.drawer,
      cssClasses?.[width],
      cssClasses?.[side],
      {
        [cssClasses.closed]: !isOpen
      }
    )}>
      {children}
    </div>  
  );
};

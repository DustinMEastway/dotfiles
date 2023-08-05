import { FC } from 'react';
import { Toast } from './toast';

export interface ToastGroupProps {
  status?: 'success' | 'warning' | 'error' | 'info';
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
};
export const ToastGroup:FC<ToastGroupProps> = ({
  status,
  position
}) => {
  return(
    <section className={makeClassName(
      cssClasses.toastGroup,
      cssClasses?.[position]
    )}>
      {toasts.map((toast: ToastItem) => (
        <Toast />
      ))}
    </section>
  );
};

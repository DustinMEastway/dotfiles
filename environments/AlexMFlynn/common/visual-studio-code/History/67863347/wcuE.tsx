import { FC } from 'react';
import { Toast } from './toast';

export interface ToastGroupProps {
  something: string;
};
export const ToastGroup: FC<ToastGroupProps> = () => {
  return(
    <section className={makeClassName(
      cssClasses.toastGroup,
      cssClasses?.[position]
    )}>
      {toasts.map((toast: ToastItem) => (
        <>

        </>
      ))}
    </section>
  );
};

import { FC, ReactElement, useEffect, useState } from 'react';
import cssClasses from './toast.module.scss';
import { Button } from '../button';
import { FontFamily, Icon, MaterialIcon } from '../icon';
import { makeClassName } from '../shared';
import { randomUUID } from 'crypto';

interface ToastContent {
  title: string | ReactElement;
  description?: string | ReactElement;
}

interface ToastItem extends ToastContent{
  id: string;
}

export interface ToastProps extends ToastContent{
  status?: 'success' | 'warning' | 'error' | 'info';
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
  duration?: number;
  action?: () => void;
}

export const Toast:FC<ToastProps> = ({
  title,
  description,
  status = 'info',
  position = 'top',
  duration = 3000,
  action
}) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (): any => {
    const newToast: ToastItem = {
      id: randomUUID(),
      title: title,
      description: description
    };

    setToasts((oldToasts):any => [...oldToasts, newToast]);
    setTimeout(() => {
      try {
        removeToast(newToast.id);
      } catch (error) {
        console.error('error', error);
      }
    }, duration);
  };

  const removeToast = (id: string): void => {
    setToasts((previousToasts) => previousToasts.filter((toast: ToastItem) => toast.id !== id));
  };

  return (
    <section id='toast-group' className={makeClassName(
      cssClasses.toastGroup,
      cssClasses?.[position]
    )}>
      {toasts.map((toast: ToastItem) => (
        <>
          <output key={toast.id} className={makeClassName(
            cssClasses?.[status]
          )}>
            <h3>{toast.title}</h3>
            {(toast.description) ?
              <>
                <hr/>
                <p>{description}</p>
              </>
              : null}
          </output>
          <Button onClick={(): void => removeToast(toast.id)}>
            <Icon font={FontFamily.materialRegular} icon={MaterialIcon.close} />
          </Button>
        </>
      ))}
    </section>
  );
};

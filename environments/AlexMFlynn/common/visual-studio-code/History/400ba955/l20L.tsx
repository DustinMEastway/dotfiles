import { FC, ReactElement, forwardRef, useImperativeHandle, useState } from 'react';
import cssClasses from './toast.module.scss';
import { Button } from '../button';
import { FontFamily, Icon, MaterialIcon } from '../icon';
import { makeClassName } from '../shared';

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
  action?: () => void[] | null;
}

export const Toast:FC<ToastProps> = forwardRef(({
  title,
  description,
  status = 'info',
  position = 'top',
  duration = 10000,
  action = null
}, toastRef) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (): void => {
    const newToast: ToastItem = {
      id: Date.now().toString(),
      title: title,
      description: description
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    setToasts((oldToasts):any => [...oldToasts, newToast]);
    setTimeout(() => {
      try {
        removeToast(newToast.id);
      } catch (error) {
        console.error('error', error);
      }
    }, duration);
  };

  useImperativeHandle(toastRef, () => ({
    addToast
  }));

  const removeToast = (id: string): void => {
    setToasts((previousToasts) => previousToasts.filter((toast: ToastItem) => toast.id !== id));
  };

  return (
    <section className={makeClassName(
      cssClasses.toastGroup,
      cssClasses?.[position]
    )}>
      {toasts.map((toast: ToastItem) => (
        <>
          <output key={toast.id} className={makeClassName(
            cssClasses?.[status]
          )}>
            <h3>{title}</h3>
            {(description) ?
              <>
                <hr/>
                <p>{description}</p>
              </>
              : null}
          </output>
          <Button onClick={(): void => removeToast(toast.id)}>
            <Icon font={FontFamily.materialRegular} icon={MaterialIcon.close} />
          </Button>
          {(action) ? <section>actions here</section> : null}
        </>
      ))}
    </section>
  );
});

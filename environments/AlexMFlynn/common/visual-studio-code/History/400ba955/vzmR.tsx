import { FC, ReactElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import cssClasses from './toast.module.scss';
import { Button } from '../button';
import { FontFamily, Icon, MaterialIcon } from '../icon';
import { makeClassName } from '../shared';

interface ToastItem {
  id: string;
}

export interface ToastProps {
  title: string | ReactElement;
  description?: string | ReactElement;
  status?: 'success' | 'warning' | 'error' | 'info';
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
  duration?: number;
  action?: () => void[] | null;
}

export const Toast:FC<ToastProps> = forwardRef(function Toast({
  title,
  description,
  status = 'info',
  position = 'top',
  duration = 10000,
  action = null
}, ref) {
  const [toasts, setToasts] = useState([]);
  const toastRef = useRef(ref);
  useImperativeHandle(ref );
  const addToast = (): void => {
    const newToast: ToastItem = {
      id: Date.now().toString()
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
    <section ref={ref} className={makeClassName(
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

import { FC, ReactElement } from 'react';
import { Toast } from './toast';

export enum status {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = ''
}

export interface ToastGroupProps {
  title: ReactElement;
  description?: ReactElement;
  status?: status;
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
  duration?: number;
  action?: () => void[] | null;
}
};
export const ToastGroup:FC<ToastGroupProps> = ({
  status,
  position
}) => {
  const [toasts, setToasts] = useState([]);

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
  return(
    <section className={makeClassName(
      cssClasses.toastGroup,
      cssClasses?.[position]
    )}>
      {toasts.map((toast: ToastItem) => (
        <Toast status=''/>
      ))}
    </section>
  );
};

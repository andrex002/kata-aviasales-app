import style from './notification.module.scss';

type NotificationProps = {
  children: React.ReactNode;
};

export function Notification({ children }: NotificationProps) {
  return (
    <div className={style.notification}>
      <div className={style['notification__logo']}>!</div>
      <div className={style['notification__text']}>{children}</div>
    </div>
  );
}

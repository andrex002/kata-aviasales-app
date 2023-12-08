import style from './moreButton.module.scss';

type MoreButtonProps = {
  onShowMoreTickets: () => void;
};

export function MoreButton({ onShowMoreTickets }: MoreButtonProps) {
  return (
    <button className={style['more-button']} onClick={onShowMoreTickets}>
      Показать еще 5 билетов!
    </button>
  );
}

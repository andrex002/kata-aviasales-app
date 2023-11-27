import { Ticket } from '../ticket/ticket';
import { MoreButton } from '../moreBtn/moreButton';

import style from './tickets.module.scss';

export function Tickets() {
  return (
    <section className={style.tickets}>
      <ul className={style['tickets__list']}>
        <Ticket />
      </ul>
      <MoreButton />
    </section>
  );
}

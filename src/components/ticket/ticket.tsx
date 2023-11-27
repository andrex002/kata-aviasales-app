import style from './ticket.module.scss';

export function Ticket() {
  return (
    <li className={`${style['tickets__item']} ${style['ticket']}`}>
      <div className={style['ticket__top']}>
        <div className={style['ticket__price']}>13400 Р</div>
        <div className={style['ticket__airline']}>
          <img className={style['ticket__airline-img']} src="//pics.avs.io/99/36/S7.png" />
        </div>
      </div>
      <div className={`${style['ticket__info']} ${style['ticket__info--there']}`}>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>MOW – HKT</div>
          <div className={style['ticket__flight-value']}>10:45 – 08:00</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>В пути</div>
          <div className={style['ticket__flight-value']}>21ч 15м</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>2 пересадки</div>
          <div className={style['ticket__flight-value']}>HKG, JNB</div>
        </div>
      </div>
      <div className={`${style['ticket__info']}`}>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>MOW – HKT</div>
          <div className={style['ticket__flight-value']}>11:20 – 00:50</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>В пути</div>
          <div className={style['ticket__flight-value']}>13ч 30м</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>1 пересадка</div>
          <div className={style['ticket__flight-value']}>HKG</div>
        </div>
      </div>
    </li>
  );
}

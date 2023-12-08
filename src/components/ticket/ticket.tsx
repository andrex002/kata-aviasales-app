import { format, roundToNearestMinutes, add } from 'date-fns';

import { TicketState } from '../../types/state';

import style from './ticket.module.scss';

type TicketProps = { ticket: TicketState };

export function Ticket({ ticket }: TicketProps) {
  const thereInfo = ticket.segments[0];
  const backInfo = ticket.segments[1];

  const roundsTime = (time: Date) => roundToNearestMinutes(time, { nearestTo: 5 });
  const getOriginTime = (time: string) => format(roundsTime(new Date(time)), 'hh:mm');
  const getDestinationTime = (time: string, duration: number) => {
    const destinationTime = add(new Date(time), { minutes: duration });
    return format(roundsTime(destinationTime), 'hh:mm');
  };
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const min = Math.floor((minutes % 60) / 5) * 5;
    return `${hours}ч ${min}м`;
  };
  const getNumberTransfers = (transfers: string[]) => {
    if (transfers.length === 0) {
      return 'Без пересадок';
    } else if (transfers.length === 1) {
      return '1 пересадка';
    } else {
      return `${transfers.length} пересадки`;
    }
  };

  return (
    <li className={`${style['tickets__item']} ${style['ticket']}`}>
      <div className={style['ticket__top']}>
        <div className={style['ticket__price']}>{ticket.price} Р</div>
        <div className={style['ticket__airline']}>
          <img className={style['ticket__airline-img']} src={`//pics.avs.io/99/36/${ticket.carrier}.png`} />
        </div>
      </div>
      <div className={`${style['ticket__info']} ${style['ticket__info--there']}`}>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>{`${thereInfo.origin} - ${thereInfo.destination}`}</div>
          <div className={style['ticket__flight-value']}>{`${getOriginTime(thereInfo.date)} - ${getDestinationTime(
            thereInfo.date,
            thereInfo.duration
          )}`}</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>В пути</div>
          <div className={style['ticket__flight-value']}>{formatDuration(thereInfo.duration)}</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>{getNumberTransfers(thereInfo.stops)}</div>
          <div className={style['ticket__flight-value']}>{thereInfo.stops.join(', ')}</div>
        </div>
      </div>
      <div className={`${style['ticket__info']}`}>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>{`${backInfo.origin} - ${backInfo.destination}`}</div>
          <div className={style['ticket__flight-value']}>{`${getOriginTime(backInfo.date)} - ${getDestinationTime(
            backInfo.date,
            backInfo.duration
          )}`}</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>В пути</div>
          <div className={style['ticket__flight-value']}>{formatDuration(backInfo.duration)}</div>
        </div>
        <div className={style['ticket__flight']}>
          <div className={style['ticket__flight-param']}>{getNumberTransfers(backInfo.stops)}</div>
          <div className={style['ticket__flight-value']}>{backInfo.stops.join(', ')}</div>
        </div>
      </div>
    </li>
  );
}

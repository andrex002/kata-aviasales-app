import NumberTransfersFilter from '../numberTransfersFilter/numberTransfersFilter';
import Tabs from '../tabs/tabs';
import Tickets from '../tickets/tickets';

import style from './app.module.scss';

export function App() {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <img className={style.logo} src={process.env.PUBLIC_URL + '/images/logo.svg'} />
      </header>
      <main>
        <NumberTransfersFilter />
        <div className={style['tickets-section']}>
          <Tabs />
          <Tickets />
        </div>
      </main>
    </div>
  );
}

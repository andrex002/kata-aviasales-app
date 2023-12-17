import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { Notification } from '../notification/notification';
import { State, TicketState, filterState } from '../../types/state';
import { Ticket } from '../ticket/ticket';
import { MoreButton } from '../moreBtn/moreButton';
import { showMoreTickets } from '../../store/action';

import style from './tickets.module.scss';

const filtersTickets = (tickets: TicketState[], filter: filterState) => {
  if (filter.filters.includes('all')) return tickets;
  if (!filter.filters.includes('noTransfers')) {
    tickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length !== 0 && ticket.segments[1].stops.length !== 0
    );
  }
  if (!filter.filters.includes('oneTransfers')) {
    tickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length !== 1 && ticket.segments[1].stops.length !== 1
    );
  }
  if (!filter.filters.includes('twoTransfers')) {
    tickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length !== 2 && ticket.segments[1].stops.length !== 2
    );
  }
  if (!filter.filters.includes('threeTransfers')) {
    tickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length !== 3 && ticket.segments[1].stops.length !== 3
    );
  }
  return tickets;
};

const sortsTickets = (tickets: TicketState[], sorting: string) => {
  switch (sorting) {
    case 'CHEAP':
      return tickets.sort((a, b) => a.price - b.price);
    case 'FAST':
      return tickets.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      );
    case 'OPTIMAL':
      return tickets;
    default:
      return tickets;
  }
};

const mapStateToProps = (state: State) => {
  return {
    tickets: state.ticketsReducer.tickets,
    showTickets: state.ticketsReducer.toShow,
    filter: state.filterReducer,
    sorting: state.tabsReducer,
    loading: state.ticketsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onShowMoreTickets() {
      dispatch(showMoreTickets());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type TabsProps = PropsFromRedux;

function Tickets({ tickets, showTickets, loading, filter, sorting, onShowMoreTickets }: TabsProps) {
  tickets = filtersTickets(tickets, filter);
  const sortedTickets = sortsTickets([...tickets], sorting);
  return (
    <section className={style.tickets}>
      {tickets.length === 0 && !loading ? (
        <Notification>
          <p>К сожалению, билетов по вашему запросу не найдено.</p>
          <p>Попробуйте изменить параметры поиска или повторить позже.</p>
        </Notification>
      ) : null}
      {loading && <p className={style['tickets__download-message']}>Идет загрузка билетов...</p>}
      <ul className={style['tickets__list']}>
        {sortedTickets.slice(0, showTickets).map((ticket, index) => {
          return <Ticket key={`${index}${ticket.price}`} ticket={ticket} />;
        })}
      </ul>
      {tickets.length ? <MoreButton onShowMoreTickets={onShowMoreTickets} /> : null}
    </section>
  );
}

export default connector(Tickets);

import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { showCheapTickets, showFastTickets, showOptimalTickets } from '../../store/action';
import { State } from '../../types/state';

import style from './tabs.module.scss';

const mapStateToProps = (state: State) => {
  return { tabName: state.tabsReducer };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onShowCheapTickets() {
      dispatch(showCheapTickets());
    },
    onShowFastTickets() {
      dispatch(showFastTickets());
    },
    onShowOptimalTickets() {
      dispatch(showOptimalTickets());
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type TabsProps = PropsFromRedux;

function Tabs({ tabName, onShowCheapTickets, onShowFastTickets, onShowOptimalTickets }: TabsProps) {
  const tabs = [
    {
      type: 'CHEAP',
      label: 'Самый дешевый',
      action: onShowCheapTickets,
    },
    {
      type: 'FAST',
      label: 'Самый быстрый',
      action: onShowFastTickets,
    },
    {
      type: 'OPTIMAL',
      label: 'Оптимальный',
      action: onShowOptimalTickets,
    },
  ];

  const tabsItem = tabs.map((tab) => {
    let className = '';
    if (tab.type === tabName) {
      className = style['tabs__item--active'];
    }
    return (
      <li key={tab.type} className={`${style['tabs__item']} ${className}`} onClick={tab.action}>
        {tab.label}
      </li>
    );
  });
  return <ul className={style.tabs}>{tabsItem}</ul>;
}

export default connector(Tabs);

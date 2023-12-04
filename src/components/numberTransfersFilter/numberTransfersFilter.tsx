import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import {
  setAllTransfers,
  setNoTransfers,
  setOneTransfers,
  setTwoTransfers,
  setThreeTransfers,
} from '../../store/action';
import { State, filterState } from '../../types/state';

import style from './numberTransfersFilter.module.scss';

const mapStateToProps = (state: State) => {
  return { statusFilters: state.filterReducer };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSetAllTransfers() {
      dispatch(setAllTransfers());
    },
    onSetNoTransfers() {
      dispatch(setNoTransfers());
    },
    onSetOneTransfers() {
      dispatch(setOneTransfers());
    },
    onSetTwoTransfers() {
      dispatch(setTwoTransfers());
    },
    onSetThreeTransfers() {
      dispatch(setThreeTransfers());
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type NumberTransfersFilterProps = PropsFromRedux;

function NumberTransfersFilter({
  statusFilters,
  onSetAllTransfers,
  onSetNoTransfers,
  onSetOneTransfers,
  onSetTwoTransfers,
  onSetThreeTransfers,
}: NumberTransfersFilterProps) {
  const filters = [
    {
      type: 'all',
      name: 'Все',
      action: onSetAllTransfers,
    },
    {
      type: 'noTransfers',
      name: 'Без пересадок',
      action: onSetNoTransfers,
    },
    {
      type: 'oneTransfers',
      name: '1 пересадка',
      action: onSetOneTransfers,
    },
    {
      type: 'twoTransfers',
      name: '2 пересадки',
      action: onSetTwoTransfers,
    },
    {
      type: 'threeTransfers',
      name: '3 пересадки',
      action: onSetThreeTransfers,
    },
  ];

  const filterItems = filters.map((filter) => {
    return (
      <label className={style['number-transfer-filter__label']} key={filter.type}>
        <input
          className={`visually-hidden ${style['number-transfer-filter__input']}`}
          type="checkbox"
          checked={statusFilters[filter.type as keyof filterState]}
          onChange={filter.action}
        />
        <span className={style['number-transfer-filter__checkbox']} />
        {filter.name}
      </label>
    );
  });
  return (
    <aside className={style['number-transfer-filter']}>
      <fieldset className={style['number-transfer-filter__fieldset']}>
        <legend className={style['number-transfer-filter__legend']}>Количество пересадок</legend>
        {filterItems}
      </fieldset>
    </aside>
  );
}

export default connector(NumberTransfersFilter);

import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { setFilter } from '../../store/action';
import { State } from '../../types/state';
import { filtersType } from '../../types/actions';

import style from './numberTransfersFilter.module.scss';

const mapStateToProps = (state: State) => {
  return { statusFilters: state.filterReducer.filters, aFilters: state.filterReducer.filters };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSetFilter(filters: filtersType) {
      dispatch(setFilter(filters));
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type NumberTransfersFilterProps = PropsFromRedux;

function NumberTransfersFilter({ statusFilters, aFilters, onSetFilter }: NumberTransfersFilterProps) {
  const filters = [
    {
      type: 'all',
      name: 'Все',
    },
    {
      type: 'noTransfers',
      name: 'Без пересадок',
    },
    {
      type: 'oneTransfers',
      name: '1 пересадка',
    },
    {
      type: 'twoTransfers',
      name: '2 пересадки',
    },
    {
      type: 'threeTransfers',
      name: '3 пересадки',
    },
  ];

  let arrFilters = aFilters;

  const toggleFilter = (filter: string) => {
    if (filter === 'all') {
      if (arrFilters.includes(filter)) {
        arrFilters = [];
      } else {
        arrFilters = ['all', 'noTransfers', 'oneTransfers', 'twoTransfers', 'threeTransfers'];
      }
    } else {
      if (arrFilters.includes(filter)) {
        arrFilters = arrFilters.filter((item: string) => item !== filter);
        arrFilters = arrFilters.filter((item: string) => item !== 'all');
      } else {
        arrFilters = [...arrFilters, filter];
        if (arrFilters.length === 4) {
          arrFilters.push('all');
        }
      }
    }
    onSetFilter(arrFilters);
  };

  const filterItems = filters.map((filter) => {
    return (
      <label className={style['number-transfer-filter__label']} key={filter.type}>
        <input
          className={`visually-hidden ${style['number-transfer-filter__input']}`}
          type="checkbox"
          checked={statusFilters.includes(filter.type)}
          onChange={() => toggleFilter(filter.type)}
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

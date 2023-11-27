import style from './numberTransfersFilter.module.scss';

export function NumberTransfersFilter() {
  return (
    <aside className={style['number-transfer-filter']}>
      <fieldset className={style['number-transfer-filter__fieldset']}>
        <legend className={style['number-transfer-filter__legend']}>Количество пересадок</legend>
        <label className={style['number-transfer-filter__label']}>
          <input className={`visually-hidden ${style['number-transfer-filter__input']}`} type="checkbox" />
          <span className={style['number-transfer-filter__checkbox']} />
          Все
        </label>
        <label className={style['number-transfer-filter__label']}>
          <input className={`visually-hidden ${style['number-transfer-filter__input']}`} type="checkbox" />
          <span className={style['number-transfer-filter__checkbox']} />
          Без пересадок
        </label>
        <label className={style['number-transfer-filter__label']}>
          <input className={`visually-hidden ${style['number-transfer-filter__input']}`} type="checkbox" />
          <span className={style['number-transfer-filter__checkbox']} />1 пересадка
        </label>
        <label className={style['number-transfer-filter__label']}>
          <input className={`visually-hidden ${style['number-transfer-filter__input']}`} type="checkbox" />
          <span className={style['number-transfer-filter__checkbox']} />2 пересадки
        </label>
        <label className={style['number-transfer-filter__label']}>
          <input className={`visually-hidden ${style['number-transfer-filter__input']}`} type="checkbox" />
          <span className={style['number-transfer-filter__checkbox']} />3 пересадки
        </label>
      </fieldset>
    </aside>
  );
}

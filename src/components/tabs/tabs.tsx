import style from './tabs.module.scss';

export function Tabs() {
  return (
    <ul className={style.tabs}>
      <li className={`${style['tabs__item']} ${style['tabs__item-active']}`}>Самый дешевый</li>
      <li className={style['tabs__item']}>Самый быстрый</li>
      <li className={style['tabs__item']}>Оптимальный</li>
    </ul>
  );
}

import PropTypes from 'prop-types';
import s from '../statistics/Statistics.module.css';
const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(stat => {
        let color;
        switch (true) {
          case stat.percentage < 10:
            color = '#ff0000';
            break;
          case stat.percentage < 20:
            color = '#ff8e00';
            break;
          case stat.percentage < 30:
            color = '#ffe100';
            break;
          case stat.percentage > 30:
            color = '#00ff00';
            break;
          default:
            color = '#00ff00';
            break;
        }
        return (
          <li
            className={s.item}
            style={{ backgroundColor: ` ${color}` }}
            key={stat.id}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}&#37;</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;

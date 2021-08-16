import PropTypes from 'prop-types';
import s from '../statistics/Statistics.module.css';
const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;

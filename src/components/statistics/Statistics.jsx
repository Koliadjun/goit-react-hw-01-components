import PropTypes from 'prop-types';
const StatisticalData = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

StatisticalData.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default StatisticalData;

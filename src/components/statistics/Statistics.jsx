import PropTypes from 'prop-types';
const StatisticalData = ({ title = '', stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      {stats.map(stat => (
        <li class="item" key={stat.id}>
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

StatisticalData.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default StatisticalData;

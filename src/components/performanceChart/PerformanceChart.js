import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
// import PropTypes from 'prop-types';

// import Loader from '../../Loader/Loader';

import './PerformanceChart.css';

const PerformanceChart = ({ data }) => {
  return (
    <div className="performance-chart">
      <ResponsiveContainer width={'100%'} aspect={3.9225 / 4.0}>
        <RadarChart
          cx="50%"
          cy="50%"
          margin={{
            top: 0,
            right: 32.5,
            bottom: 0,
            left: 32.5,
          }}
          innerRadius={10}
          data={data}
        >
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="name"
            stroke="#FFFFFF"
            dy={2.5}
            tickLine={false}
            fontSize={12}
          />
          <Radar
            name={'User'}
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// PerformanceGraph.propTypes = {
// 	processedData: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			name: PropTypes.string,
// 			sessionLength: PropTypes.number,
// 		})
// 	),
// };

export default PerformanceChart;

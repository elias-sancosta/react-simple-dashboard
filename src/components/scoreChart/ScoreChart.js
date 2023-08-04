import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// import PropTypes from 'prop-types';
// import Loader from '../../Loader/Loader';
import './ScoreChart.css';

const ScoreChart = ({ data }) => {
  const customizedLegend = () => {
    return (
      <div className="score-chart-legend">
        <span className="today-score">{data[0].uv}%</span>
        <p>de votre objectif</p>
      </div>
    );
  };

  return (
    <div className="score-chart">
      <h3>Score</h3>
      <ResponsiveContainer width={'100%'} aspect={3.9225 / 4.0}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="75%"
          outerRadius="85%"
          startAngle={90}
          endAngle={450}
          data={data}
          style={{
            backgroundColor: '#FFFFFF',
            clipPath: 'circle(37.5% at 50% 50%)',
          }}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
            fill="#FFFFFF"
            dataKey="uv"
          />

          <RadialBar
            minAngle={100}
            background={{ fill: '#FBFBFB' }}
            cornerRadius={5}
            clockWise
            dataKey="uv"
            angleAxisId={0}
            style={{ zIndex: 5 }}
            data={data.uv}
          />

          <Legend
            content={customizedLegend}
            layout="vertical"
            verticalAlign="middle"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';
// import PropTypes from 'prop-types';

// import Loader from '../../Loader/Loader';
import './SessionChart.css';

const SessionChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom__tooltip__average">
          <div className="tooltip__details__average">
            <p className="label__average">
              {payload[0].payload.sessionLength} min
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  // Customize the area after the cursor when hovering the graph
  const CustomCursorArea = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={points[0].x}
        width={300}
        height={300}
      />
    );
  };

  return (
    <div className="session_chart">
      <h4>Durée moyenne des sessions</h4>
      <ResponsiveContainer width={'100%'} aspect={3.9225 / 4.0}>
        <LineChart
          data={data}
          width={600}
          height={300}
          margin={{
            top: 50,
            right: -10,
            left: -10,
            bottom: 10,
          }}
        >
          {/* Type of line, remove the dots, change the color and the width of the line */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
          />
          <XAxis
            dataKey="day"
            style={{ fill: 'rgba(255, 255, 255, .5)' }}
            interval={0}
          />
          {/* Hide the axis */}
          <YAxis hide={true} domain={['dataMin-10', 'dataMax + 5']} />
          {/* Use the CustomToolTip & CustomCursorArea and move the Tooptip 60px off from the cursor */}
          <Tooltip
            content={<CustomTooltip payload={data} />}
            cursor={<CustomCursorArea />}
            // position={{ y: 50 }}
            offset={-60}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// AverageSessionGraph.propTypes = {
// 	processedData: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			name: PropTypes.string,
// 			sessionLength: PropTypes.number,
// 		})
// 	),
// };

export default SessionChart;

import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './ActivityChart.css';

function ActivityChart({ data }) {
  //   const customTooltipFunction = ({ active, payload, label }) => {
  //     if (active && payload && payload.length) {
  //       return (
  //         <div className="custom__tooltip">
  //           <p className="label">{`${label} : ${payload[0].kilogram}kg`}</p>
  //           <p className="label">{`${label} : ${payload[0].kilogram}Kcal`}</p>
  //         </div>
  //       );
  //     }

  //     return null;
  //   };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
          <div>
            {payload.map((pld) => (
              <div
                style={{
                  display: 'flex',
                  padding: 10,
                  backgroundColor: '#e60000',
                  justifyContent: 'center',
                  fontSize: '10px',
                }}
              >
                <div style={{ color: 'white' }}>{pld.value}</div>
                <div style={{ color: 'white' }}>{pld.dataKey}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer
      className="activityChartContainer"
      width="100%"
      aspect={3}
    >
      <BarChart
        width={735}
        height={320}
        data={data}
        margin={{
          top: 60,
          right: 20,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />

        <XAxis
          dataKey="day"
          tick={{ fill: '#9B9EAC' }}
          stroke="#DEDEDE"
          dy={15}
        />

        <YAxis
          datakey="kcal"
          orientation="right"
          type="number"
          axisLine={false}
          tick={{ fill: '#9B9EAC' }}
          stroke="#FBFBFB"
          dx={20}
        />

        {/* Setting up the YAxis for the calories datas and hidding the line */}
        <YAxis dataKey="kcal" hide={true} yAxisId={1} />

        {/* <Tooltip
          // content={customTooltipFunction}
          offset={10}
          allowEscapeViewBox={{ x: true, y: true }}
          position={{ y: 80 }}
        /> */}

        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

        <Legend
          layout="horizontal"
          verticalAlign="top"
          iconType="circle"
          iconSize={8}
          align="right"
          wrapperStyle={{ top: 20 }}
        />

        <Bar
          dataKey="kg"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]}
          name="Poids (kg)"
        />

        <Bar
          dataKey="kcal"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
          name="Calories brûlées (kCal)"
        />

        <text
          x="30"
          y="40"
          fontSize="15"
          fontWeight="500"
          fill="#20253A"
          className="activityChartTitle"
        >
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
}

ActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ActivityChart;

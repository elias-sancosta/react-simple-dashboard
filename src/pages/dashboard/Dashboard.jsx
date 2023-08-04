import './dashboard.css';
import { useParams } from 'react-router-dom';
// import useFetch from '../../utils/hooks/hook';
// import Navbar from '../../components/navbar/Navbar';
// import Sidebar from '../../components/sidebar/Sidebar';
// import Greeting from '../../components/sidebar/Sidebar';
// // import Loader from '../../components/loader/Loader';
import useFetch from '../../utils/hooks/hook';
import ActivityChart from '../../components/activityChart/ActivityChart';
import SessionChart from '../../components/sessionChart/SessionChart';
import PerformanceChart from '../../components/performanceChart/PerformanceChart';
import ScoreChart from '../../components/scoreChart/ScoreChart';
import Profile from '../../components/profile/Profile';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './dashboard.css';
import KeyDatas from '../../components/keyDatas/KeyDatas';

const Dashboard = () => {
  const { id } = useParams();

  const { data, loading, isError, errorMessage } = useFetch(
    '/mockedData/scoredata.json',
    parseInt(id)
  );

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return (
      <div>
        Ocorreu um erro: {isError} {errorMessage}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      {data && (
        <div className="charts">
          <div className="charts-left">
            <Profile data={data.userInfos.firstName} />
            <ActivityChart data={data.data} />
            <div className="charts-bottom">
              <SessionChart data={data.sessionsTime} />
              <PerformanceChart data={data.performanceData} />
              <ScoreChart data={data.scores} />
            </div>
          </div>
          <div className="charts-right">
            <KeyDatas
              data={data.keyData}
              loading={loading}
              isError={isError}
              errorMessage={errorMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

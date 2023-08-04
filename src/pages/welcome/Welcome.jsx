import './welcome.css';
import useFetch from '../../utils/hooks/hook';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card';
import Error from '../../components/error/Error';

export default function Welcome() {
  const { data, loading, isError } = useFetch('/mockedData/scoredata.json');
  const listOfUsers = data;

  return (
    <div className="container">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="title">
        <h1>Coaching Sportif</h1>
        <p>
          Suivez le nombre de sessions effectuées réalisées ainsi que le nombre
          de calories brûlées.
        </p>
      </div>
      <div className="content">
        {isError ? (
          <Error />
        ) : loading ? (
          <Loader />
        ) : (
          <div className="cards">
            {listOfUsers.map((user) => (
              <Link to={`/dashboard/${user.id}`} key={user.id}>
                <Card
                  id={user.id}
                  name={`${user.userInfos.firstName} ${user.userInfos.lastName}`}
                  picture={user.cover}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

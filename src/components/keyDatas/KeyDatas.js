import './KeyDatas.css';

import caloryImg from '../../assets/calories-icon.png';
import carbsImg from '../../assets/carbs-icon.png';
import fatImg from '../../assets/fat-icon.png';
import proteinImg from '../../assets/protein-icon.png';

import Loader from '../loader/Loader';

const KeyDatas = ({ data, loading, isError, errorMessage }) => {
  return (
    <div className="keyDatas__container">
      {isError ? (
        <div className="error">
          Une erreur est survenue lors du chargement des données clés : <br />{' '}
          {isError && errorMessage}
        </div>
      ) : loading ? (
        <Loader />
      ) : (
        <div className="keyDatas">
          <div className="user__key__datas">
            <div>
              <img src={caloryImg} alt="logo_calory" />
            </div>
            <div className="key__data__text">
              <h2>{data.calorieCount}kCal</h2>
              <span>Calories</span>
            </div>
          </div>
          <div className="user__key__datas">
            <div>
              <img src={proteinImg} alt="logo_protein" />
            </div>
            <div className="key__data__text">
              <h2>{data.proteinCount}g</h2>
              <span>Protéines</span>
            </div>
          </div>
          <div className="user__key__datas">
            <div>
              <img src={carbsImg} alt="logo_carbs" />
            </div>
            <div className="key__data__text">
              <h2>{data.carbohydrateCount}g</h2>
              <span>Glucides</span>
            </div>
          </div>
          <div className="user__key__datas">
            <div>
              <img src={fatImg} alt="logo_fat" />
            </div>
            <div className="key__data__text">
              <h2>{data.lipidCount}g</h2>
              <span>Lipides</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyDatas;

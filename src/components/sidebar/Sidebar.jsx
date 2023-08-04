import './sidebar.css';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <ul className="side-bar-icons">
          <li>
            <img src={Icon1} alt="icon-1" />
          </li>
          <li>
            <img src={Icon2} alt="icon-2" />
          </li>
          <li>
            <img src={Icon3} alt="icon-3" />
          </li>
          <li>
            <img src={Icon4} alt="icon-4" />
          </li>
        </ul>

        <p className="copyright">Copyright, SportSee 2020</p>
      </div>
    </div>
  );
}
export default Sidebar;

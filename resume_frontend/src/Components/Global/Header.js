import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';
import { useHistory ,useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation()
  console.log("here",location.pathname);
  return (
      <header>
        <div className="container">
          <h1>Resume Builder</h1>
          <p className="hide-small">Upload, get content and design</p>

          <nav className="site-nav">
            <ul className="group">
              <li className={location.pathname=='/current'?'active':'passive'}><a href="/current">Current Resume</a></li>
              <li className={location.pathname=='/upload'?'active':'passive'}><a href="/upload">Upload new resume</a></li>
              <li className={location.pathname=='/data'?'active':'passive'}><a href="/data">Resume Data Editor</a></li>
              <li className={location.pathname=='/logout'?'active':'passive'}><a href="/logout" alt="logout"><span>Logout</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;

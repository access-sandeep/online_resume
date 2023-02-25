import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from './redux/actions';

function Header() {
  return (
      <header>
        <div className="container">
          <h1>Resume Builder</h1>
          <p className="hide-small">Upload, get content and design</p>

          <nav className="site-nav">
            <ul className="group">
              <li className="active"><a href="#current">Current Resume</a></li>
              <li><a href="#upload">Upload new resume</a></li>
              <li><a href="#data">Resume Data Editor</a></li>
              <li><a href="#logout" alt="logout"><span>Logout</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;

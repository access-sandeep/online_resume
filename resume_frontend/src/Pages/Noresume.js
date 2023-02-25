import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../redux/actions';

function Noresume() {
  return (
      <div className="content-area group">
        <div className="container">
          <div className="main-area">
            <h2>Start by uploading your resume</h2>
            <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <div className="info-box">
              Upload Form here
            </div>
          </div>
          <aside className="sidebar">
            <p>This is the sidebar. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
          </aside>
        </div>
      </div>
  );
};

export default Noresume;

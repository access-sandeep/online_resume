import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';

function Noresume() {
  return (
      <div className="main-area">
        <h2>Start by uploading your resume</h2>
        <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <div className="info-box">
          Upload Form here
        </div>
      </div>
  );
};

export default Noresume;

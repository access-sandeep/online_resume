import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';
import Aside from '../Global/Aside'

function Index() {
  return (
      <div className="main-area">
        <h2>Main Column Heading</h2>
        <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <div className="info-box hide-small">
          <p>
            <strong>This content is not absolutely vital and does not need to display on mobile devices</strong>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip. Sint occaecat cupidatat non proident.
          </p>
        </div>
        <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src="images/bird.jpg" alt="Bird on fence." />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      </div>
  );
};

export default Index;

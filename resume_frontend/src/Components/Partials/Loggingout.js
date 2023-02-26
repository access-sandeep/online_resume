import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';
import Aside from '../Global/Aside'

function Loggingout() {
  return (
      <div className="main-area">
        <h2>Redirecting to login page ...</h2>
      </div>
  );
};

export default Loggingout;

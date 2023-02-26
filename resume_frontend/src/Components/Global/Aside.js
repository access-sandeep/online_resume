import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';

function Aside() {
  return (
    <aside className="sidebar">
      <h2>Your Resume data</h2>
      <ul>
        <li>No Data Available</li>
      </ul>
    </aside>
  );
};

export default Aside;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';

function Footer() {
  return (
    <footer>
        <p>&copy; 2023 - This is the footer.</p>
      </footer>
  );
};

export default Footer;

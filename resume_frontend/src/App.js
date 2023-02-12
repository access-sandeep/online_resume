import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from './redux/actions';


function mapStateToProps(state) {
  return {
    resumes: state
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {removePost}, dispatch );
};

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Online Resume</li>
            <li>My Videos</li>
          </ul>
          <ul>
            <li>My Account</li>
            <li>Log out</li>
          </ul>
        </nav>
      </header>
      <main>
        Main content
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

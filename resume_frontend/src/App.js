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
        <div class="container">
          <h1>Website Title</h1>
          <p class="hide-small">Website slogan included here.</p>

          <nav class="site-nav">
            <ul class="group">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li class="hide-small"><a href="#">FAQs</a></li>
              <li class="hide-small"><a href="#">Links</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="content-area group">
        <div class="container">
          <div class="main-area">
            <h2>Main Column Heading</h2>
            <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <div class="info-box hide-small">
              <p>
                <strong>This content is not absolutely vital and does not need to display on mobile devices</strong>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip. Sint occaecat cupidatat non proident.
              </p>
            </div>
            <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="images/bird.jpg" alt="Bird on fence." />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
          <aside class="sidebar">
            <p>This is the sidebar. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
          </aside>
        </div>
      </div>
      <footer>
        <p>&copy; 2014 - This is the footer.</p>
      </footer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

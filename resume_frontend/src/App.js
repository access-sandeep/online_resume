import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Index from './Pages/Index';
import Current from './Pages/Current';
import Noresume from './Pages/Noresume';
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
      <Header />
      <Index />
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Header from './Components/Global/Header';
import Footer from './Components/Global/Footer';
import Aside from './Components/Global/Aside'
import Index from './Components/Partials/Index';
import Current from './Components/Partials/Current';
import Noresume from './Components/Partials/Noresume';
import Loggingout from './Components/Partials/Loggingout';
import UploadForm from './Components/Partials/UploadForm';
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
      <div className="content-area group">
        <div className="container">
          <Routes>
             <Route exact path="/current" element={<UploadForm />} />
             <Route path="/upload" element={<Index />} />
             <Route path="/data" element={<Noresume />} />
             <Route path="/logout" element={<Loggingout />} />
           </Routes>
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

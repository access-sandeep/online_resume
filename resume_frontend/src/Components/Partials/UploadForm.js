import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../../redux/actions';
import Aside from '../Global/Aside'

function Loggingout() {
  return (
      <div className="main-area">
        <h1>Please upload your resume</h1>
        <form>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Upload</span>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" />
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Loggingout;

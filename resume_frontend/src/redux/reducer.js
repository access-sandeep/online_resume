import initData from './../datacenter/init';

const postReducer = function(state = initData, action) {
	switch(action.type){
		case 'REMOVE_RESUME': return [...state.slice(0, action.index), ...state.slice(action.index+1)];
		default: return state;
	}
};

export default postReducer;

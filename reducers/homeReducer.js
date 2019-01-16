import { SET_HOME_ISMOUNTED } from '../actions/index';

const initialState = {
  data: [],
  mounted: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_HOME_ISMOUNTED :
      return {
        ...state,
        mounted: action.mounted
      };

    default:
      return state;
  }
};

export default homeReducer;

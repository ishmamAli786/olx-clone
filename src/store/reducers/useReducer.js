import {FETCH_DATA,filter,all,cartData,filter_with_input} from '../.././constant/types';



const initialState={
    data:[],
    all:[],
}



const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
      break;
      case filter:

        const updatedItems=state.data.filter((curElement)=>{
            return curElement.category ===action.payload;
          })
        return {
          ...state,
          data:updatedItems
        };
        break;


        case all:
            return {
              ...state,
              data: action.payload,
            };



            case cartData:
            return {
              ...state,
              data: action.payload,
            };


            case filter_with_input:
        const updatedData=state.data.filter((curElement)=>{
            return curElement.category ===action.payload;
          })
        return {
          ...state,
          data:updatedData
        };
        break;








            default:return state
    }
}


export default userReducer;
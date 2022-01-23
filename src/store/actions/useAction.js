import {FETCH_DATA,FETCH_DATA_ERROR,filter,all,cartData,filter_with_input} from '../.././constant/types' ;
import {db} from '../.././config/firebase';






export const fetchProducts = (setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      let products = await db.collection("test").get();
      let data = [];
      products.forEach((doc) => {
        data.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type: FETCH_DATA,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };




  export const filterProduct=(categ)=>{
      return{
          type:filter,
          payload:categ
      }
  }




  export const allProducts = (setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      let products = await db.collection("test").get();
      let data = [];
      products.forEach((doc) => {
        data.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type: all,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };




  export const cartProduct=(id)=>async(dispatch)=>{
      try{
          let cart=await db.collection('test').doc(id).get();
          dispatch({
            type: cartData,
            payload: cart.data(),
          });
      }
      catch (error) {
        console.log("error", error);
        alert(error);
      } 
  }





  export const filterByInput=(categ)=>{
    return{
      type:filter_with_input,
      payload:categ
    }
  }
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from ".././config/firebase";
import {Card,Container} from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import {cartProduct} from '.././store/actions/useAction';
import './ProductDesc.css';

export default function ProductDesc() {
  const { id } = useParams();
  console.log(id);
  const {data}=useSelector(state=>state.userReducer);
  console.log("Single Cart Data",data)
  const dispatch=useDispatch();

  useEffect(() => {
      dispatch(cartProduct(id))
  }, []);
  return (
    <>
    <h1>Products</h1>
    <Container fluid>
      <div  className="mainContainer">
        <div>
          <img src={data.img} alt="image" width="100%" height="100%"></img>
        </div>
        <div>
          <Card  className="cardStyling">
            <Card.Body>
              <Card.Title>
                  <div  className="cardTitle">
                      <span>{data.price}</span>
                      <span><i className="fas fa-share"></i></span>
                      <span><i className="far fa-heart"></i></span>
                  </div>
                  </Card.Title>
                  <Card.Text className="cardStyle">
                  <p>New PLUS FAT BIKE P-750 brand new imported box pack</p>
                  </Card.Text>
              <Card.Text>
                  <div className="cardText">
                      <span>
                      Model Colony, Karachi
                      </span>
                      <span>
                      3 days ago
                      </span>
                  </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="card" style={{width: '60rem',marginTop:"30px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{marginLeft:"80px"}}>Detail</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <span>Price</span>
            <span>{data.price}</span>
            <span>Condition</span>
            <span>New</span>
          </div>
          <hr/>
         <div>
           <h4>Description</h4>
           <span>New Arrival</span><br/>
           <span>New PLUS FAT BIKE P-750 brand new imported box pack</span><br/>
           <span>Full Aluminium Frame light weight 10 to 11</span><br/>
           <span>New Model 2021</span><br/>
           <span>Whole sale rate</span><br/>
           <span>Price 30,000</span><br/>
           <span>Men/women Both</span><br/>
           <span>Size 27</span><br/>
           <span>Dual disk brake </span><br/>
           <span>Light Weight </span><br/>
           <span>Super High Quality  </span><br/>
           <span>Address model colony near airport karachi </span><br/>
           <span>What'sapp 0,3,1,6,2,4,5,1,4,1,3 </span><br/>
           <span>Phone 0,3,1,6,2,4,5,1,4,1,3 </span><br/>
           <span>zero three one six two four five one four one three </span><br/>
           <span>Home delivery Available </span><br/>
           <span>Visit Facebook page </span><br/>
           <span>#MashaAllah_bicycle_karachi </span><br/>
           <span>Home delivery available at your doorstep </span><br/>
           <span>Limited piece are available </span><br/>
         </div>
        </div>
      </div>
      </Container>
    </>
  );
}

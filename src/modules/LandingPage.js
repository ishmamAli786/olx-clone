import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchProducts,filterProduct,allProducts} from '../store/actions/useAction';
import {Card,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Banner from '../CommonComponent/Banner';
import './LandingPage.css'

export default function LandingPage() {
    const [loading, setLoading] = useState(false);
    const {data} = useSelector(state => state.userReducer)
    console.log(data);
    const dispatch=useDispatch();
  
  
    useEffect(()=>{
      dispatch(fetchProducts(setLoading))
    },[])
    return (
        <>





      <div className="catgDev">
        <button onClick={()=>dispatch(filterProduct('bike'))} className="cols">Bike</button>
        <button onClick={()=>dispatch(filterProduct('land'))} className="cols">Land</button>
        <button onClick={()=>dispatch(filterProduct('mobile'))} className="cols">Mobile</button>
        <button onClick={()=>dispatch(filterProduct('car'))} className="cols">Car</button>
        <button onClick={()=>dispatch(filterProduct('tablet'))} className="cols">Tablet</button>
        <button onClick={()=>dispatch(filterProduct('house'))} className="cols">House</button>
        <button onClick={()=>dispatch(allProducts(setLoading))} className="cols">All</button>
      </div>
        <Banner/>
        <Container fluid className="mainContainer">
      <Row>
            {
        data.map((doc,index)=>(
          <div key={index}>
        <Col className="mainCol overflow-hidden">
          <Card style={{ width: '18rem' }}>
          <Link to={`/product/${doc.docID}`}><Card.Img variant="top" src={doc.img} width="200px" height="200px"/></Link>
          <Card.Body style={{backgroundColor:"#d4cfcf"}}>
            <Card.Title>{doc.price}</Card.Title>
            <Card.Text style={{marginTop:"-15px"}}>
              {doc.desc}
            </Card.Text>
            <div className="cardStyle">
              <span>Modal Colonay Karachi</span>
              <span>3 Days Ago</span>
            </div>
          </Card.Body>
        </Card>
        </Col>
        </div>
        ))
      }
      </Row>
      </Container>

        </>
    )
}

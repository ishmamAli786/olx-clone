import React from 'react';
import {NavLink} from 'react-router-dom';
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="py-3 mt-3 shadow-lg"  style={{backgroundColor: '#a8a5a5', fontSize: '12px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h6>POPULAR CATEGORIES</h6>
              <NavLink to="#" className="foot" >Cars</NavLink><br />
              <NavLink to="#" className="foot">Flats for rent</NavLink><br />
              <NavLink to="#" className="foot">Mobile Phones</NavLink><br />
              <NavLink to="#" className="foot">Jobs</NavLink><br />
            </div>
            <div className="col-md-2">
            <h6>TRENDING SEARCHES</h6>
              <NavLink to="#" className="foot">Bikes</NavLink><br />
              <NavLink to="#" className="foot">Watches</NavLink><br />
              <NavLink to="#" className="foot">Books</NavLink><br />
              <NavLink to="#" className="foot">Dogs</NavLink><br />
            </div>
            <div className="col-md-2">
              <h6>ABOUT US</h6>
              <NavLink to="#" className="foot">About EMPG</NavLink><br />
              <NavLink to="#" className="foot">OLX Blog</NavLink><br />
              <NavLink to="#" className="foot">Contact Us</NavLink><br />
              <NavLink to="#" className="foot">OLX for Businesses</NavLink><br />
            </div>
            <div className="col-md-2">
              <h6>OLX</h6>
              <NavLink to="#" className="foot">Help</NavLink><br />
              <NavLink to="#" className="foot">Sitemap</NavLink><br />
              <NavLink to="#" className="foot">Legal and Privacy information</NavLink><br />
            </div>
            <div className="col-md-2">
              <h6>FOLLOW US</h6>
              <NavLink to="#" className="foot">
              <i className="fab fa-facebook fa-3x"></i>
                </NavLink>
              <NavLink to="#" className="foot">
              <i className="fab fa-twitter-square fa-3x" style={{marginLeft:"10px"}}></i>
              </NavLink>
              <NavLink to="#" className="foot">
              <i className="fab fa-youtube fa-3x" style={{marginLeft:"5px",marginRight:"5px"}}></i>
                  </NavLink>
                  <NavLink to="#" className="foot">
                  <i className="fab fa-instagram fa-3x"></i>
                  </NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{backgroundColor:"#002f34",color:"white",fontSsize: "1.204rem",fontWeight: "700px",height:"50px",marginTop:"8px"}}>
              <span style={{marginLeft:"900px"}}>
              Free Classifieds in Pakistan
              </span>
              . © 2006-2021 OLX
          </div>
      </div>
        </>
    )
}

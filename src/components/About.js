import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/onu.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p style={{color:'#ff',fontFamily:'calibri', fontSize: '20px'}}>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address" style={{color:'#ff',fontFamily:'calibri', fontSize: '20px'}}>
       						<span>{resumeData.email}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <h4 style={{color:'#7393b3',fontStyle: 'italic', fontFamily:'segoe print '}}>Phone :
                  {resumeData.address}
                </h4>
                <h4 style={{color:'#7393b3',fontStyle: 'italic', fontFamily:'segoe print '}}>Email :
                  {resumeData.email}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
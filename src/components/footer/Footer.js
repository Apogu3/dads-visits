import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div>
    <footer>
    <div className="main-footer">
    <div className="container p-3 my-3 bg-secondary">
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <h6><Link to="/info" className="foot-color">Info</Link></h6>
            </div>
            <div className="col-md-3 col-sm-6">
                <h6><Link to="/help" className="foot-color">Help?</Link></h6>
            </div>
            <div className="col-md-3 col-sm-6">
                <h6><Link to="/privacy" className="foot-color">Privacy</Link></h6>
            </div>
            <div className="col-md-3 col-sm-6">
                <h6><Link to="/termuse" className="foot-color">Terms of Use</Link></h6>
            </div>
        </div>
    </div>
</div>
</footer>
</div>
  );
};

export default Footer;
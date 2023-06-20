import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">This web has been developed by Ismail Elhassouni</p>
            <p className="mb-0">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">For more information, contact:</p>
            <p className="mb-0">
              <a href="mailto:ismaileLhassouni@999gmail.com" className="text-light me-3">IsmailELhassouni@999gmail.com</a>
              <a href="https://wa.me/0625236886" className="text-light">0625236886={'>'}(WhatsApp)</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import TechCardList from './Components/tech-cards';
import SignUp from './Components/SignUp';

function Content({ page }) {
  switch (page) {
    case 'home':
      return (
        <div className="App">
          <h1 className='homeheading'>Tech Gadgets</h1>
          <TechCardList />
        </div>
      );

    case 'about':
      return (
        <div className="App">
          <h1>About Us</h1>
          <p>We are a tech company providing the latest gadgets to our users.</p>
        </div>
      );

    case 'services':
      return (
        <div className="App">
          <h1>Our Services</h1>
          <ul>
            <li>Product Listing</li>
            <li>Gadget Management</li>
            <li>Details of Tech Gadgets</li>
          </ul>
        </div>
      );

    case 'contact':
      return (
        <div className='App'>
          <h1>Contact Us Online</h1>
          <ul>
            <li>Email: techgadgets334@xyz.com</li>
            <li>Phone: +1(403)888-8888</li>
          </ul>
        </div>
      )
      case 'signup':
        return (
        <div className="App">
          <SignUp />
        </div>
  );


    default:
      return (
        <div className="App">
          <h1>404 - Page Not Found</h1>
        </div>
      );
  }
}

export default Content;

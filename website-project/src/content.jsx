import React from "react";
import TechCardList from "./Components/tech-cards";
import SignIn from "./Components/SignIn";          
import CreateAccount from "./Components/CreateAccount";
import Dashboard from "./Components/DashBoard";
import { useAuth } from "./auth/AuthProvider";


function Content({ page, setPage }) {
  const { user, loading } = useAuth();
  switch (page) {
    case "home":
      return (
        <div className="App">
          <h1>Tech Gadgets</h1>
          <TechCardList />
        </div>
      );

    case "about":
      return (
        <div className="App">
          <h1>About Us</h1>
          <p>We are a tech company providing the latest gadgets to our users.</p>
        </div>
      );

    case "services":
      return (
        <div className="App">
          <h1>Our Services</h1>
          <ul>
            <li>Product Listing</li>
            <li>Inventory Management</li>
            <li>CMS Integration</li>
          </ul>
        </div>
      );

    case "signin":
      return (
        <div className="App">
          <SignIn setPage={setPage} />
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

    case "create-account":
      return (
        <div className="App">
          <CreateAccount setPage={setPage} />
        </div>
      );

    case "dashboard":
      console.log("[Content] loading,user =>", loading, user?.uid, user?.email);
      if (loading) return <div className="App">Loading…</div>;
      if (!user) {
        return (
          <div className="App">
            <SignIn setPage={setPage} />
          </div>
        );
      }
      return (
        <div className="App">
          <Dashboard user={user} />
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

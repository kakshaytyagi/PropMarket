import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo1.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header


// // import React, { useState } from "react";
// // import "./header.css";
// // import { nav } from "../../data/Data";
// // import { Link } from "react-router-dom";


// const Header = () => {
//   const [navList, setNavList] = useState(false);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) {
//       return "Good Morning";
//     } else if (hour < 18) {
//       return "Good Afternoon";
//     } else {
//       return "Good Evening";
//     }
//   };

//   return (
//     <>
//       <header>
//         <div className="background-container">
//           <div className="shape shape1"></div>
//           <div className="shape shape2"></div>
//           <div className="shape shape3"></div>
//         </div>
//         <div className="container flex header-top">
//           <div className="logo">
//             <img src="./images/logo2.png" alt="logo" />
//           </div>
//           <div className="nav">
//             <ul className={navList ? "small" : "flex"}>
//               {nav.map((list, index) => (
//                 <li key={index}>
//                   <Link to={list.path}>{list.text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="header-right flex">
//             <input type="text" placeholder="Search..." className="search-bar" />
//             <i className="fa fa-bell notification-icon"></i>
//             <div className="toggle">
//               <button onClick={() => setNavList(!navList)}>
//                 {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="container flex header-bottom">
//           <h4>{getGreeting()}</h4>
//           <div className="country-select">
//             <label htmlFor="country">Choose Country:</label>
//             <select id="country" name="country">
//               <option value="us">United States</option>
//               <option value="in">India</option>
//               <option value="uk">United Kingdom</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

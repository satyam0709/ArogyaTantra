// import React, { useState } from "react";
// import "./Navbar.css"; // Assuming styles are in Navbar.css

// const Navbar = () => {
//   const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
//   const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("Languages 🌐");

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguagesDropdown(false); // Close dropdown after selection
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">ArogyaTantra</div>
//       <ul className="nav-links">
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#services">Our Services</a>
//         </li>

//         {/* Expertizes Dropdown */}
//         <li
//           className="dropdown"
//           onMouseEnter={() => setShowIndustriesDropdown(true)}
//           onMouseLeave={() => setShowIndustriesDropdown(false)}
//         >
//           <span>Expertizes</span>
//           <span className="dropdown-icon">▼</span>
//           {showIndustriesDropdown && (
//             <ul className="dropdown-menu animated-dropdown">
//               <li>
//                 <a href="#finance">Finance</a>
//               </li>
//               <li>
//                 <a href="#healthcare">Healthcare</a>
//               </li>
//               <li>
//                 <a href="#technology">Technology</a>
//               </li>
//               <li>
//                 <a href="#technology">Banking</a>
//               </li>
//               <li>
//                 <a href="#technology">Education</a>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li>
//           <a href="#contact">Contact Us</a>
//         </li>

//         {/* Languages Dropdown */}
//         <li className="dropdown">
//           <span onClick={() => setShowLanguagesDropdown(!showLanguagesDropdown)}>
//             {selectedLanguage}
//           </span>
//           <span className="dropdown-icon">▼</span>
//           {showLanguagesDropdown && (
//             <ul className="dropdown-menu">
//               <li onClick={() => handleLanguageSelect("English")}>English</li>
//               <li onClick={() => handleLanguageSelect("Spanish")}>Spanish</li>
//               <li onClick={() => handleLanguageSelect("French")}>French</li>
//               <li onClick={() => handleLanguageSelect("Hindi")}>Hindi</li>
//               <li onClick={() => handleLanguageSelect("Japanese")}>Japanese</li>
//               <li onClick={() => handleLanguageSelect("Urdu")}>Urdu</li>
//               <li onClick={() => handleLanguageSelect("German")}>German</li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Languages");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguagesDropdown(false); // Close dropdown after selection
  };

  return (
    <nav className="navbar">
       <div className="logo">
        <img src="src/assets/images/logoo.jpg" alt="ArogyaTantra Logo" />
        
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>

        {/* Expertizes Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowIndustriesDropdown(true)}
          onMouseLeave={() => setShowIndustriesDropdown(false)}
        >
          <span className="span">Expertizes</span>
          <span className="dropdown-icon"></span>
          {showIndustriesDropdown && (
            <div className="expertizes-dropdown-menu">
              <div className="expertize-item">Technology</div>
              <div className="expertize-item">Banking</div>
              <div className="expertize-item">Education</div>
              <div className="expertize-item">Finance</div>
              <div className="expertize-item">Healthcare</div>
            </div>
          )}
        </li>

        <li>
          <a href="#contact">Contact Us</a>
        </li>

        {/* Languages Dropdown */}
        <li>
          <div
            className="language-dropdown"
            onClick={() => setShowLanguagesDropdown(!showLanguagesDropdown)}
          >
            <span className="language-icon">🌐</span>
            <span>{selectedLanguage}</span>
            <span className="dropdown-icon">▼</span>
          </div>
          {showLanguagesDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleLanguageSelect("English")}>English</li>
              <li onClick={() => handleLanguageSelect("Spanish")}>Spanish</li>
              <li onClick={() => handleLanguageSelect("French")}>French</li>
              <li onClick={() => handleLanguageSelect("Hindi")}>Hindi</li>
              <li onClick={() => handleLanguageSelect("Japanese")}>Japanese</li>
              <li onClick={() => handleLanguageSelect("Urdu")}>Urdu</li>
              <li onClick={() => handleLanguageSelect("German")}>German</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


import "./header.css"
import netflixLogo from "../../assets/Images/Netflix-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div>
      <div className="header_outer_container">
    <div className="header_container">
      <div className="header_left">
        <div className="logo">
          <img src={netflixLogo} alt="Netflix Logo" width="100" />
        </div>
        <ul className="nav_links">
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="header_right">
        <ul>
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <><AccountBoxIcon /></>
          <><ArrowDropDownIcon /></>

        </ul>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header

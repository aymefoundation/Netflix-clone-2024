import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>

        {/* Icons */}
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer Links */}
        <div className='footer_data'>

          <div className='footer_column'>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div className='footer_column'>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div className='footer_column'>
            <ul>
              <li>Cookies Preferences</li>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div className='footer_column'>
            <ul>
              <li>Corporate Information</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>

        <div className='footer_bottom'>
          <div className='service_code'>
            <p>Service Code</p>
          </div>
          <div className='copy-write'>
            &copy; 1997-2024 Netflix, Inc.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;

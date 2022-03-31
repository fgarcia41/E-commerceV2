import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="footer-content">
          <h3>American YouthWorks</h3>
          <p>Published by Fernando Garcia</p>
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
          <img
            src="/E-commerce/images/YouthBuildAustin-Emblem-Knockout (2).png"
            alt="youthbuild logo"
          />
        </section>
        <section className="footer-bottom">
          <p>
            copyright &copy;2021 American. designed by <span>Fernando</span>
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;

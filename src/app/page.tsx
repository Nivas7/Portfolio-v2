export default function Home() {
  return (
    <>
      <div id="loader">
        <div className="nb-spinner"></div>
      </div>
      <div id="desktop">
        <div id="head">
          <div id="name" style={{ display: "inline-block" }}>
            <a href=".">Nivaz</a>
          </div>
          <ul className="navigation">
            <li className="nav-item">
              <a href="/" className="checkmark">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/art" className="checkmark">
                Art
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                className="checkmark"
                style={{ color: "var(--link-color2)" }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/Yash_Bhagat_Resume.pdf">Resume</a>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="home dummyanim" id="one">
            <div className="grid-container">
              <div className="grid-item">
                <div className="heading">
                  Hi, I'm{" "}
                  <span style={{ color: "var(--link-color2)" }}>Yash</span>
                  <div className="wave"></div>
                  <br /> I craft digital experiences.
                </div>
                <div id="designation">
                  Product Designer based in India. Passionate about creating
                  delightful products.
                </div>
              </div>
            </div>
            {/* Add portfolio/work sections here */}
          </div>
          {/* Add more sections as in your HTML */}
        </div>
        <div id="footer">
          <div id="copyright">© Yash Bhagat</div>
        </div>
      </div>
    </>
  );
}

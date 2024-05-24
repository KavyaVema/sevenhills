import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";
import { IoCallSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
function App() {
  const [loading, setLoading] = useState(true);
  const [hideFooter,setHideFooter]=useState(false);
  const location = useLocation()

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
        <div className="contact-nav-bar">
        <div className="contact-nav-bar-item"><IoCallSharp />9848647123 </div>
        <div className="contact-nav-bar-item"><FaEnvelope />info@sevenhillsenterprises.in</div></div>
          <Nav />
          <MoveToTop />

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App

import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span style={{color: '#009AD7'}}>Gesco</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                Designed and developed by <Link style={{color: '#009AD7'}} to="https://mon-portofolio-ten.vercel.app/">Yehiel Yanou</Link>
                </div>
            </footer>

            <NavLink to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></NavLink>
        </>
    )
};

export default Footer;
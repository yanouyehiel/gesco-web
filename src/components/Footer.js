import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer id="footer" class="footer">
                <div class="copyright">
                    &copy; Copyright <strong><span>Gesco</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                Designed and developed by <Link to="https://mon-portofolio-ten.vercel.app/">Yehiel Yanou</Link>
                </div>
            </footer>

            <Link to="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
        </>
    )
};

export default Footer;
import React, { Fragment, useState } from "react"
import Header from "./components/Header"
import Sidenav from "./components/Sidenav"
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { hasAuthenticated } from './services/AuthApi';
import Auth from './contexts/Auth';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";

const Layout = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated)
    
    return (
        <Fragment>
            {isAuthenticated ? 
                <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
                    <Header />
                    <Sidenav />
                    <Routes>
                        {children.map((child, i) => (
                            <Route 
                                key={i}
                                path={child.props.path}
                                exact={child.props.exact}
                                element={child.props.element}
                            />
                        ))}
                    </Routes>
                    <Footer />
                </Auth.Provider> :
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/*' element={<Notfound />} />
                </Routes>
            }
        </Fragment>
    )
}

export default Layout;
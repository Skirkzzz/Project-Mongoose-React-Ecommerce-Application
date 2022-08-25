<<<<<<< HEAD
import Header  from "./Header"
import Footer  from "./Footer"

const Layout = ({children}) =>{
  
  return (
    <div className="wrapper">
         <Header />
         <div className="container">
             {children}
          </div>
          <Footer />
    </div>
  )
}

export default Layout
=======
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container flex justify-center">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf

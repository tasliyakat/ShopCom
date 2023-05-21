import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({children}) {
  return (
    <>
    <Header/>
    <div className="container-md mt-4">
        <div className="row g-3">
            {/**Column1 - Catagories */}
            <div className="col-md-3 d-none d-md-block">
                <SideBar/>
            </div>
            {/**Column2 - Products */}
            <div className="col-12 col-md-9">
                {children}
            </div>
        </div>
    </div>
    </>
  )
}
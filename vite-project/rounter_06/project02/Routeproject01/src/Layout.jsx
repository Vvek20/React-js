import {Outlet,Link} from "react-router-dom"
function Layout() {
  
  
    return (
      <>
      <h1>Layout </h1>
      <nav>
        <ul>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <link to="/contact">Contact</link>
            </li>

        </ul>
      </nav>
      </>
    )
  }

  export default Layout
  
import {Outlet, Link } from "react-router-dom";
function Layout({setCount, count}) {
    return (
      <div>
          <nav>
            <ul>
                <li>
                <Link to="/home" onClick={()=>{setCount(count+1)}}>Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/Contact">Contact</Link>
                </li>
            </ul>
          </nav>
        <Outlet />
      </div>
    );
  }

  export default Layout;
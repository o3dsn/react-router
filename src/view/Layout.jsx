import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
          <li>
            <Link to='/contacts'>Contatos</Link>
          </li>
          <li>
            <Link to='/products'>Produtos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
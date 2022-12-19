import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  function handleClick() {
    logout();
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Make Me Fit 🏋🏻 </h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link id="nav-login" to="/login">
                Login
              </Link>
              <Link id="nav-signup" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

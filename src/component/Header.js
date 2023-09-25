import Link from "next/link";

const Header = async () => {
  return (
    <nav className="flex justify-between c-container-box">
      <div className="nav-logo pt-6 pb-6">
        <h2>Logo</h2>
      </div>
      <div className="nav-links flex gap-10 p-6">
        <div className="nav-item">
          <Link href={ "/" }> Home </Link>
        </div>
        <div className="nav-item">
          <p>Blog</p>
          <ul className="nav-item-dropdown hidden">
            <li>
              <Link href={ "/blog" }> Create </Link>
            </li>
            <li>
              <Link href={ "/blog" }> List </Link>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <p>Sign In</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
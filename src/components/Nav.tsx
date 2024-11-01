import {Link} from 'react-router-dom'
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
        >
          Candidate Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SavedCandidates"
        >
          Saved Candidate
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default Nav;

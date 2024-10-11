import React from 'react';
import {Link} from "react-router-dom";

const Home: React.FC = () => (
  <>
    <nav>
      <ul>
        <li>
          <h2><Link to="/fundamentals" className="link"> WebGL Fundamentals - Practice #1 </Link></h2>
        </li>
      </ul>
    </nav>
  </>
);

export default Home;

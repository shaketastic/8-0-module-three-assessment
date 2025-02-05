import { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

//move to external file --
class Nav extends Component {
  //only use if you have something in state, constructor, super, this.state
//   constructor() {
//     super();
//       this.state = {

//     };
//   }
  render() {
    return <div className="nav" >
       
        <Link to="/">
        <img 
            className="nav img"
            src="https://w0.peakpx.com/wallpaper/505/598/HD-wallpaper-pikachu-totoro-ghibli-pikachu-pokeball-pokemon-totoro.jpg"
            alt="pikachu totoro logo"
            width="300"
            height="400"
            />
        </Link>
        <ul>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        </ul>
    </div>
    }
  }

export default Nav;
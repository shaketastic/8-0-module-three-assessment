import { Component } from "react";
import Nav from "./Nav"
import "../App.css";

  class Movies extends Component {
    constructor() {
      super();

      this.state = {
        display: true,
        data: []
      };
    }

    fetchMovies = () => {
      fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())  //one line - implicit return 
      .then((allData) => {

          this.setState({  //save data so it can be used later, data, array set to state to be accessed
             data: allData
        });
      });
    };
    
    handleLMovieHide=(e) => {
      this.setState({
          display: e.target.value  // or e.target.value
      })
    }

    componentDidMount = () => {
      this.fetchMovies();
  }





  render() {
    return <div className="Movies">
        <h1>Movies</h1>
        {/* <Nav /> */}
        Select Movie
    </div> 
    };
}

export default Movies;
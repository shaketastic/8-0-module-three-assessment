import { Component } from "react";
import Nav from "./Nav";
import "../App.css";

class Locations extends Component {
    constructor() {
      super();

      this.state = {
        display: true,
        data: []
      };
    }

    fetchLocations = () => {
      fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())  //one line - implicit return 
      .then((allData) => {

          this.setState({  //save data so it can be used later, data, array set to state to be accessed
             data: allData
        });
      });
    };
    
    handleLocHide=(e) => {
      this.setState({
          display: e.target.value  // or e.target.value
      })
    }

    componentDidMount = () => {
      this.fetchLocations();
  }

  // 1.map thru, 2.returned jsx, 3.then displayed data
  render() {
      let locationsToDisplay = this.state.data.map((location) => {
      return ( 
      <div>
        <Nav />
        <div>
        <nav><div className="locations-card">Show Locations</div></nav>
         
          <nav><ul><li>Name: { location.name }</li></ul></nav>
          <nav><ul><li>Climate: { location.climate }</li></ul></nav>
          <nav><ul><li>Terrain: { location.terrain }</li></ul></nav>
          </div>
        </div>
        );
       });
      
       return (
         <div className="locations">
          <h1>List of Locations</h1>
           <button onClick={this.handleLocHide} onSubmit={this.state.display }>
            <nav>Hide Locations</nav>
          </button>
        <nav><div className="Locs">{ locationsToDisplay }</div></nav>   
    </div>
       );  
    }
  }
    


    export default Locations;
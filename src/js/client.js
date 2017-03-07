import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "Welcome"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({title: event.target.value});
  }

  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button>Soy un boton</button>
        <h1>It works loves!</h1>
        <input onChange={this.handleChange}/>
      </div>

    );
  }


}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);

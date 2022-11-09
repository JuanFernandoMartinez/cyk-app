
import React from 'react';
import './App.css';






function App() {
  return (
    <AppComponent>

    </AppComponent>
  );
}


class AppComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      grammar : "",
      text: ""
    }
  }

  handleChange = e =>{
    switch (e.target.name){
      case "grammar" : this.setState({
        grammar: e.target.value,
      });
      break;
      case "text" : this.setState({
        text : e.target.value
      })
      break;
      default: console.log("raro");
    }

   
    
  }

  handleSubmit = async e=>{
    e.preventDefault();
    
    console.log(this.state.grammar)
    if (this.state.grammar !== "" && this.state.text !== ""){
      let response = await fetch("https://cyk-backend.herokuapp.com/",{
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    let res = await response.json()
    
    if (res.status === true) alert("String "+this.state.text+" can be formed")
    else alert("The string "+this.state.text+" Cannot be formed by grammar")
    }else{
      alert("all fields must be filled")
    }
  }
  render(){
    return (
      <div className = "m-auto w-50 p-5 bg-light rounded border shadow-lg mt-5 bg-black" >
      <head>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </head>
      
      <form className = "bg-white w-75 m-auto rounded mb-5 p-3" onSubmit = {this.handleSubmit}>
      <h1 className = "text-center w-50 m-auto mt-5">CYK Algorithm</h1>

      <div className = "w-100 m-auto align-middle">
        <div className="form-floating m-auto w-75">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name = "grammar" onChange = {this.handleChange}>{this.state.grammar}</textarea>
          <label for="floatingTextarea2">Write your grammar Here</label>
        </div>
        <br>
        </br>
        <br>
        </br>
        
        <div className="form-floating m-auto w-75 ">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name = "text" onChange = {this.handleChange}>{this.state.grammar}</textarea>
          <label for="floatingTextarea2">Write your String here</label>
        </div>

        <br>
        </br>
        <br>
        </br>
      </div>
      <div className='w-50 m-auto'>
        <button className = "btn btn-danger w-100">
          Let's Go
        </button>
      </div>
      </form>
    </div>
    )
  }
}

export default App;

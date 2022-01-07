import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  // handleFirstNameChange = (event) => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = (event) => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  //combine the first two functions into one like this!
  handleOnChange = (event) => {
    if(event.target.name === 'firstName'){//check we are inputting on the relevant DOM input element
      if(this.state.firstName.length > 10) { //check its length
        this.setState({
          error: "Firstname is too long"
        })
      }
    }
    // if(event.target.name === 'lastName'){ 
    //   if(this.state.lastName.length > 10) {
    //     this.setState({
    //       error: "Lastname is too long"
    //     })
    //   }
    // }

    this.setState({
      [event.target.name]: event.target.value //square brackets to make it dynamic and not take literal string "event.target.value"
    }) //update state firstName: "user input"
  }

handleSubmit = (event) => { 
event.preventDefault(); //prevent opening new page
// console.log(event.target); //uncontrolled
// console.log(event.target[0].value)
// console.log(event.target[1].value)
let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
let dataArray = this.state.submittedData.concat(formData) //combine existing array with new array
this.setState({submittedData: dataArray})
// this.sendFormDataSomewhere(formData)
console.log(this.state); //controlled //asynchronous?
}

  listOfSubmissions = () => {
    return this.state.submittedData.map((data, i) => {
      return <div key={i}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleOnChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleOnChange(event)} value={this.state.lastName} />
        <input type="text" name="dob" onChange={event => this.handleOnChange(event)} value={this.state.dob} />
        <button type='submit'>Submit</button>
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
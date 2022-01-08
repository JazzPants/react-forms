import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

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
  //look in ParentComponent
  




//   listOfSubmissions = () => {
//     return this.state.submittedData.map((data, i) => {
//       return <div key={i}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }


// handleSubmitOnForm =(event) => { //pass values to parent
//   event.preventDefault();
//   this.props.handleSubmit({
//     firstName: this.state.firstName,
//     lastName: this.state.lastName,
//     dob: this.state.dob
//   })
// }

  render() {
    return (
      <div>
      <form onSubmit={event => this.props.handleOnSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.props.handleOnChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleOnChange(event)} value={this.props.formData.lastName} />
        <input type="text" name="dob" onChange={event => this.props.handleOnChange(event)} value={this.props.formData.dob} />
        <button type='submit'>Submit</button>
      </form>
      {/* {this.listOfSubmissions()} */}
      </div>
    )
  }
}

export default Form;
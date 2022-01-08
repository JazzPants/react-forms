import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'



class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        dob: "",
        error: '',
        submittedData: []
      }

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
//handleSubmit = (firstName, lastName, dob)
      handleSubmit = (event) => { 
        // console.log(firstName);
        // console.log(lastName);
        // console.log(dob);
        event.preventDefault(); //prevent opening new page
        // console.log(event.target); //uncontrolled, each form element has its own internal state you must access individually
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        let formData = { firstName: this.state.firstName, lastName: this.state.lastName, dob: this.state.dob }
        let dataArray = this.state.submittedData.concat(formData) 
        // //combine existing array with new array
        this.setState({submittedData: dataArray})
        // this.sendFormDataSomewhere(formData)
        console.log(this.state); //controlled //asynchronous?
        console.log(this.state.firstName)

        }
    
      render() {
        return (
            <div>
          <Form 
          handleOnSubmit={this.handleSubmit}
            formData={this.state}
            handleOnChange={this.handleOnChange}
            handleOnChange={this.handleOnChange} >
            </Form>
          <DisplayData formData={this.state}></DisplayData>
          </div>
        )
      }

}

export default ParentComponent;
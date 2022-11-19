import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';
class Layer extends Component {

  render() {
    return (
      <div id="parameter">
        <Form onSubmit={(event) => {
          event.preventDefault()
          this.props.smartContractFunctionName(this.inputVariable.value)
        }}>

        
          <input
            id="newInput"
            ref={(input) => {
              this.inputVariable = input
            }}
            type="text"
            className="form-control"
            placeholder=" Enter Notice"
            required />
          <input type="submit" hidden={true} />
        
            <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>  
              

           
      </div>
    );
  }
}

export default Layer;
import React, { Component } from 'react';
class AddNinja extends Component {
    state = {
        name:null,
        age:null,
        belt:null
      }
      handleChange=(e)=>{
          this.setState({
              [e.target.id]:e.target.value
          })
      }

      handleSubmit=(e)=>{
          e.prevantdefault();
          console.log(this.state)
      }
    render() { 
        return (
            <div className="add-ninjas">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age"/>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt"/>
                    <buttome>Submit</buttome>
                </form>

            </div>
          );
    }
}
 
export default AddNinja;
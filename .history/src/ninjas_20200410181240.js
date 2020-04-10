import React ,{Component} from 'react';

export default class Ninjas extends Component{
    render(){
        console.log("Props values",this.props)
        return (
        <div className="Ninjas">
            <div>Name: Ejaz</div>
            <div>Age: 29</div>
<div>Belt:  Black</div>

        </div>
        )
    }
}
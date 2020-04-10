import React ,{Component} from 'react';

export default class Ninjas extends Component{
    render(){
        // console.time('timer')
        console.log(this.props.ninjas);
        // console.timeEnd('timer')
        const {ninjas}=this.props.ninjas;
        return (
        <div className="Ninjas">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Belt:  {belt}</div>

        </div>
        )
    }
}
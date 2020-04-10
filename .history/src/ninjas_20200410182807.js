import React ,{Component} from 'react';

export default class Ninjas extends Component{
    render(){
        // console.time('timer')
        // console.log(this.props);
        // console.timeEnd('timer')
        const {name,age,belt}=this.props;
        return (
        <div className="Ninjas">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Belt:  {belt}</div>

        </div>
        )
    }
}
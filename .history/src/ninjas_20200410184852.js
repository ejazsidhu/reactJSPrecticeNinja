import React ,{Component} from 'react';

export default class Ninjas extends Component{
    render(){
        // console.time('timer')
        console.log(this.props.ninjas);
        // console.timeEnd('timer')
        const {ninjas}=this.props;
        const ninjasList=ninjas.map(ninja=>{
            return (
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt:  {ninja.belt}</div>
            )
        })
        return (
            <div className="Ninjas">
                {ninjasList}
            </div>
      
        )
    }
}
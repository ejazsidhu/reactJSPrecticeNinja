import React ,{Component} from 'react';

export default class Ninjas extends Component{
    render(){
        // console.time('timer')
        console.log(this.props.ninjas);
        // console.timeEnd('timer')
        const {ninjas,deleteNinja}=this.props;
        const ninjasList=ninjas.map(ninja=>{
            return (
            <div className="Ninjas" key={ninja.id}>

                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt:  {ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>delete</button>
                <hr/>
                </div>
            )
        })
        return (
            <div className="ninja-list">
                {ninjasList}

            </div>
      
        )
    }
}
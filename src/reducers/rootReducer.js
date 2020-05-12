const initState={
    posts:[
        {id:1,title:"Superman",body:'Superman can fly'},
        {id:2,title:"Batman",body:'Batman can Drive'},
        {id:3,title:"Aquaman",body:'Aquaman can swim'},

    ]
}
 const rootReducer=(state=initState,action)=>{

    return state;

}

export default rootReducer;
import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'

class Page extends Component {
    // state = {
    //     params: null,
    //     post: null
    // }
    // componentDidMount() {
    //     const params = this.props.match.params['post_id'];
    //     console.log(params);
    //     this.setState({
    //         params: params
    //     })
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + params)
    //         .then(res => {
    //             console.log('pos response', res)
    //             this.setState({
    //                 post: res.data
    //             })
    //         }
    //         )
    // }

    handleDelete=(id)=>{
    // console.log('delete post called',id)
        this.props.deletePost(id); 
        this.props.history.push('/'); 
    }
    render() {
        const { params, post } = this.props;
        const singlePost=post?( 
             <div className="post card" key={post.id}>
                        <img src={Pokeball} width="200" alt=" A PokeBall"/>

        <div className="card-content">
            <Link to={'/' + post.id} className="card-title red-text">{post.title}</Link>
            <p>{post.body}</p>
            <div>
                <button className="btn gray" onClick={()=>{this.handleDelete(post.id)}}>Delete Post</button>
            </div>
        </div>
    </div>
    ):(
        <div className="center">Loading post...</div>
    )
        return (
            <div className="container home">
              {singlePost}

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state,ownProps);
    let id=ownProps.match.params.post_id;
    return {
        post: state.posts.find(post=>post.id==id)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);
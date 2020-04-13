import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'

class Page extends Component {
    state = {
        params: null,
        post: null
    }
    componentDidMount() {
        const params = this.props.match.params['post_id'];
        console.log(params);
        this.setState({
            params: params
        })
        axios.get('https://jsonplaceholder.typicode.com/posts/' + params)
            .then(res => {
                console.log('pos response', res)
                this.setState({
                    post: res.data
                })
            }
            )
    }
    render() {
        const { params, post } = this.state;
        const singlePost=post?( 
             <div className="post card" key={post.id}>
                        <img src={Pokeball} width="200" alt=" A PokeBall"/>

        <div className="card-content">
            <Link to={'/' + post.id} className="card-title red-text">{post.title}</Link>
            <p>{post.body}</p>
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

export default Page;
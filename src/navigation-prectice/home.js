import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom'

class Home extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log('pos response', res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            }
            )

    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/'+post.id} className="card-title">{post.title}</Link>
                            <p>{post.body}</p>
                        </div>
                    </div>

                )
            })
        ) : (
                <div className="center">No Posts yet</div>
            )
        return (
            <div className="container home">
              {postList}
            </div>
        )
    }

}

export default Home;
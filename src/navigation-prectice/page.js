import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
class Page extends Component {
    state = {
        params: null,
        post: {}
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
        const { params, post } = this.state
        return (
            <div className="container">
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <Link to={'/' + post.id} className="card-title">{post.title}</Link>
                        <p>{post.body}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Page;
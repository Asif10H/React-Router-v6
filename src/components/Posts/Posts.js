import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'
const Posts = (props) => {
    // console.log(props);
    const { id, title, body } = props.post;
    // console.log(body);
    return (
        <div className="col-sm-6 p-2">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{id} {title}</h5>
                    <p className="card-text">{body}</p>
                    <Link className="btn btn-primary" to={`/posts/${id}`}>More Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default Posts;
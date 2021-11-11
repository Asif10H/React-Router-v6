import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { id} = useParams()
return (
    <div className="text-center">
        <h5 className="card-title">Post id number {id}</h5>
        <Link to="/home">
            <button className="btn btn-primary p-2 m-2">Back to Home</button>
        </Link>
    </div>
);
};
export default Post;
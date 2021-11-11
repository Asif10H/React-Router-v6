import React from 'react';
import Posts from '../Posts/Posts';
import postsData from '../../fakeData';
const Home = () => {
    return (
        <div className="container">
            <div className="row">
            {
              postsData.map(post => <Posts post={post} key={post.id}></Posts>)
            }
            </div> 
        </div>
    );
};

export default Home;
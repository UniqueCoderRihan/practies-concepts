import React from 'react';
import '../Components/Blog.css'
const Blog = (props) => {
    return (
        <div>
            <h2>Yah Huh:{props.inputArea}</h2>
            <h3>{props.heading}</h3>
            <h3>{props.auhtor}</h3>
        </div>
    );
};

export default Blog;
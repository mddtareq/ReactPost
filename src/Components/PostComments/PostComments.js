import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Comments from '../Comments/Comments';

const PostComments = ({id}) => {
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        Axios(url)
            .then(results => {
                setComments(results.data);
                const length=results.data.length;
                const url=`https://randomuser.me/api/?results=${length}`;
                Axios(url).then(results =>setImages(results.data.results))
            })
    }, []);
    return (
        <div>
           {
            comments.map((comment,index)=><Comments key={comment.id} comment={comment} image={images[index]}></Comments>)
           }
        </div>
    );
};

export default PostComments;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './PostDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostComments from '../PostComments/PostComments';

const useStyles = makeStyles({
    root: {
        minWidth: 400,
    },
    media: {
        height: 140,
    },
});

const PostDetail = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [posts, setPosts] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        Axios(url)
            .then(results => setPosts(results.data))
    }, []);
    const { title, body } = posts;
    return (
        <div className='stylePost'>
        <div className='mainPost'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent className='mainPostContent'>
                        <Typography gutterBottom variant="h5" component="h4">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='mainPostAction'>
                    <Button href='/posts' variant='contained' color="secondary" size="small">
                        Go Back
                </Button>
                </CardActions>
            </Card>
        </div>
        <h1 className="headLine">Comments:</h1>
        <div>
        <PostComments id={id}></PostComments>
        </div>
        </div>
    );
};

export default PostDetail;

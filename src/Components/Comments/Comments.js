import React from 'react';
import './Comments.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    minWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 8,
  },
  pos: {
    marginBottom: 12,
  },
});


const Comments = ({ comment, image }) => {
  let peopleImage = '';
  if (image) {
    let { picture } = image;
    peopleImage = picture.medium;
  }
  const classes = useStyles();
  const { name,email, body } = comment;
  return (
    <div className='comment'>
      <Card className={classes.root}>
        <CardContent className='commentContent'>
          <Typography className={classes.pos+' reset'} color="textSecondary">
            <img src={peopleImage} alt="" /> <h5 className='email'>{email} <br/>{name} </h5> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="small" >
            {body}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button variant="contained" size="small" color="primary">Reply</Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default Comments;
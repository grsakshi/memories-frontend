import Post from './post/post';
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing="3">
                {
                    posts.map(post => (
                        <Grid key={post._id} item xs={12} md={6}>
                            <Post setCurrentId={setCurrentId} post={post} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts

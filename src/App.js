import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import memories from './images/memories.png';
import Posts from "./components/posts/posts";
import Form from "./components/form/form";

import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="çenter">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing="3"
              className={classes.maincontainer}
            >
              <Grid item xs={12} md={7}>
                <Posts currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App

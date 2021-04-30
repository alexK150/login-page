import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import PostItem from "./PostItem";
import AddPost from "./AddPost";
import {connect} from "react-redux";
import {fetchPosts} from "../redux/actions/actions";

function Posts(props) {

  useEffect(() => {
    props.fetchPosts()
  }, [])

  useEffect(() => {
    props.posts.unshift(props.newPost);
  }, [props]);

  return (
    <div className={'posts-page'}>
      <h1 className={'text-center bg-success'}>Posts</h1>
      <Link to={'/'}>Back to main page</Link>
      <AddPost/>
      {props.posts.map(el => {
        return (<PostItem key={el.id} post={el}/>)
      })}
    </div>
  );
}

const mapStateToProps = ({posts: {posts, post}}) => ({
  posts,
  newPost: post
})

export default connect(mapStateToProps, {fetchPosts}) (Posts);
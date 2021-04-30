import React, {useState} from 'react';
import {connect} from "react-redux";
import {addPost} from "../redux/actions/actions";

function AddPost(props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onChange = (e, param) => {
    if (param === 'title') {
      setTitle(e.target.value)
    } else if (param === 'text') {
      setText(e.target.value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      text
    }
    props.addPost(post)
  }

  return (
    <div className={'card'}>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label>
          <br/>
          <input
            className={'input-fields'}
            type="text"
            name="title"
            onChange={(e) => onChange(e, 'title')}
            value={title}
          />
        </div>
        <br/>
        <div>
          <label>Text Content: </label>
          <br/>
          <textarea
            name="body"
            onChange={(e) => onChange(e, 'text')}
            value={text}
          />
        </div>
        <br/>
        <button className={'btn btn-dark'} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(null, {addPost}) (AddPost);
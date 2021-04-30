import React from 'react';
import {Link} from "react-router-dom";

const Page = ({handleLogout, user}) => {
  return (
    <div className={'main-page'}>
      <h1 className={'text-center bg-success'}>User Page
        <button id={'btn-absolute'} className={'btn btn-dark'} onClick={handleLogout}>Logout</button>
      </h1>
      <Link to={'/posts'}>To Posts</Link>
    </div>
  )
}

export default Page;
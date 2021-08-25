import React, { Component } from 'react'
import {Button } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class PostForm extends Component {
  state = {
    formData: {
      postId: this.props.post.id,
      title: this.props.title,
      leader: this.props.userProfile._id,
      queue: this.props.queue,
      eroles: [{
          support1: this.props.support1,
          support2: this.props.support2,
          dps1: this.props.dps1,
          dps2: this.props.dps2,
          tank1: this.props.tank1,
          tank2: this.props.tank2
      }]
    }
  }

  handleAddPost= e => {
    e.preventDefault()
    this.props.handleAddPost(this.state.formData)
  }

  handleRemovePost = e => {
    e.preventDefault()
    this.props.handleRemovePost(this.state.formData.api_id)
  }

  render() { 
    return (
      <>
        { this.props.userProfile?.post.some(post => post.postId === parseInt(this.state.formData.postId)) &&
          <Button size="small" variant="contained" startIcon={<RemoveCircleIcon />} onClick={this.handleRemovePost}>REMOVE</Button>
        }
        { !this.props.userProfile?.post.some(post => post.api_id === parseInt(this.state.formData.postId)) &&
          <Button size="small" variant="contained" color="secondary" startIcon={<AddCircleIcon />} onClick={this.handleAddPost}>ADD</Button>
        }
      </>
    );
  }
}
 
export default PostForm;
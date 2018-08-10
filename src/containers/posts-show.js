import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost, deletePost} from '../actions/index';

class PostsShow extends Component {

  componentDidMount() {
    if(!this.props.post) {
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  handleDelete() {
    const {id} = this.props.match.params;
    this.props.deletePost(id);
    this.props.history.push('/');
  }

  render() {
    const {post} = this.props;
    if(!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to='/' className="btn btn-primary">Back to all posts</Link>
        <button
          onClick={this.handleDelete.bind(this)}
          className="btn btn-danger pull-sm-right">
            Delete
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStatToProps(state, ownProps) {
  return {post: state.posts[ownProps.match.params.id]};
}

export default connect(
  mapStatToProps,
  {fetchPost, deletePost}
)(PostsShow);

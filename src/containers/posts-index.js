import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';

import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    if(_.isEmpty(this.props.posts)) {
      this.props.fetchPosts();
    }
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Link key={post.id} to={`/show/${post.id}`}>
          <li className="list-group-item" >
            {post.title}
          </li>
        </Link>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/new">Add New Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }

}

function mapStatToProps(state) {
  return {posts: state.posts};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStatToProps, mapDispatchToProps)(PostsIndex);

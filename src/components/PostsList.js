import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostsList extends React.Component {

  renderList() {
    // map this.props.posts
    return this.props.posts.map(el => {
      return (
        <div key={el.id}>
          <div>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </div>
          {/* passing props down to component */}
          <UserHeader userId={el.userId} />
        </div>
      )
    })
  }

  componentDidMount() {
    // do action fetch posts
    this.props.fetchPosts();
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}

// get all posts as props
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

// first argument is state from store
// as second argument we pass Action Creator and it will run as props in this component
export default connect(mapStateToProps, { fetchPosts })(PostsList);

import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // 🔁 Lifecycle Method - Called once component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // ⚙️ Method to fetch posts
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Fetch error:", error);
        this.setState({ hasError: true });
      });
  }

  // ⚠️ Lifecycle Method - Catch rendering errors
  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts.");
    console.error("Error:", error, info);
    this.setState({ hasError: true });
  }

  // 🖼️ Render the post list
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading the posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

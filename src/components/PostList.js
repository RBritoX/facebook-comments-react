import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Nome Sobrenome',
          avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
        },
        date: '03 Jul 2019',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        comments: [
          {
            id: 2,
            author: {
              name: 'Nome Sobrenome',
              avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
            },
            date: '03 Jul 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Nome Sobrenome',
          avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
        },
        date: '03 Jul 2019',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Nome Sobrenome',
              avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
            },
            date: '03 Jul 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            id: 5,
            author: {
              name: 'Nome Sobrenome',
              avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
            },
            date: '03 Jul 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Nome Sobrenome',
          avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
        },
        date: '03 Jul 2019',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Nome Sobrenome',
              avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
            },
            date: '03 Jul 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            id: 5,
            author: {
              name: 'Nome Sobrenome',
              avatar: 'https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_400x400.png'
            },
            date: '03 Jul 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;

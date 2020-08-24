import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/index'
import Headline from './components/headline/index'
import GlobalButton from './components/fetchPosts/index'
import ListPost from './components/listPosts/index'
import { fetchPosts } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  fetch = () => {
    this.props.fetchPosts();
  }

  render(){

    const configButton = {
      buttonText: 'Fetch Posts',
      emitEvent: this.fetch
    }

    const { posts } = this.props;

    return (
        <div>
          <Header />
          <section className='main'>
            <Headline header='Posts' desc='Some headline'/>
            <GlobalButton {...configButton}/>
          </section>
  
          <section className='main'>
            { posts.length > 0 && 
              posts.map((post, index) => {
                const {title, body} = post;
                const configPost = {
                  title,
                  desc: body
                }
                return ( <ListPost  key={index} {...configPost}/> );
              })
            }
          </section>
  
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);

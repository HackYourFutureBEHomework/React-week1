import React, { Component } from 'react';
import './App.css';

// Import json data 
// Download from https://api.github.com/users/[YOUR GITHUB NAME]/repos
import myGithubRepos from './myrepos.json';

const RepoItem = (props) => {
  return (
    <li>
      {props.repo.name} (stars: {props.repo.stargazers_count})
    </li>
  )
}

class App extends Component {
  render() {
    console.log(myGithubRepos)

    // map creates a list of RepoItem components https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components
    const repos = myGithubRepos.map((repo, index) => {
      return (
        // More info about key : https://reactjs.org/docs/lists-and-keys.html#keys
        <RepoItem key={index} repo={repo}/>
      )
    })
    
    console.log(repos)

    return (
      <ul>
        {repos}
      </ul>
    );
  }
}

export default App;

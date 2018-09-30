# Lesson Plan Week 1

## Agenda

### What & Why React

- [React.js](https://reactjs.org/)

- React makes building user interfaces more manageable.
- Old way, is less organised. Manipulating the DOM

### JSX

- Introduction [here](https://reactjs.org/docs/introducing-jsx.html)

- How to

- Question: 

### Render Elements

- [Info](https://reactjs.org/docs/rendering-elements.html)

- Render a simple object via ```ReactDOM.render()```

### Components and Props

- [Info](https://reactjs.org/docs/components-and-props.html)

- Why and how to make components.
- Practice on splitting html into components
- Props are read-only

### Create React App

- [Create react app](https://github.com/facebook/create-react-app)


### Notes

- Always start the name of a component with a capital letter
- All React components must act like pure functions with respect to their props.

## Examples

### Hello World

- Create element

### Clock

- Render element

- Update element

### Movie list

- Create component

- Reuse Movie component


## In-Class Github repo list

### TODOs

- create react app 
    - `npx create-react-app my-github-repo-app`
    - `cd my-github-repo-app`
    - `npm start`

- Remove JSX from App Component in App.js and create a list
```
class App extends Component {
  render() {
    return (
      <ul>
        <li>repo 1 name (stars:20)</li>
        <li>repo 2 name (stars:1)</li>
      </ul>
    );
  }
}
```

- Create a json file with content from `https://api.github.com/users/[YOUR GITHUB NAME]/repos`

- import json file `import myGithubRepos from './myrepos.json';`

- create a new component
```
const RepoItem = (props) => {
    return (
        <li>
            {props.repo.name} (stars: {props.repo.stargazers_count})
        </li>
    )
}
```

- loop over the `myGithubRepos` array with a map function
```
const repos = myGithubRepos.map((repo, index) => {
    return (
        <RepoItem key={index} repo={repo}/>
    )
})
```

- render `repos` in the list
```
const RepoItem = (props) => {
    return (
        <li>
            {props.repo.name} (stars: {props.repo.stargazers_count})
        </li>
    )
}

class App extends Component {
    render() {
        const repos = myGithubRepos.map((repo, index) => {
            return (
                <RepoItem key={index} repo={repo}/>
            )
        })

        return (
            <ul>
                {repos}
            </ul>
        )
    }
}
```
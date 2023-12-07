import React from 'react'
import RepoItem from './RepoItem'
const Repos = ({repos}) => {
    console.log('repos page',repos)
  return (
    
    repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)
  )
}

export default Repos
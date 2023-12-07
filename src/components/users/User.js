import React,{useContext, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
const User = (props) => {
    const githubContext=useContext(GithubContext);
    const {getUser,loading,user,getUserRepos,repos}=githubContext;
    const {username}=useParams();
    useEffect(() => {
    getUser(username);
    getUserRepos(username);
  }, []);
  const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable,company}=user;
  console.log('user page repo',repos)
  if(loading)return <Spinner/>  
  else {
    return (
    <div>
        <Link to="/" className='btn btn-light'>
            Back To Search
        </Link>
        Hireable:{' '}
        { 
        hireable ?<i className='fas fa-check text-success'></i>:
         <i className='fas fa-times-circle text-danger'></i>   
        }
        <div className='card grid-2'>
            <div className='all-center'>
                <img src={avatar_url} className='round-img' alt="" style={{width:"150px"}}/>
                <h1>{name}</h1>
                <p>Location:{location}</p>

            </div>
            <div>
                {bio && <div>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    </div>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <>
                            <strong>Username:</strong>{login}
                            </>}
                        </li>
                        <li>
                            {company && <>
                            <strong>Company:</strong>{company}
                            </>}
                        </li>
                        <li>
                            {blog && <>
                            <strong>Website:</strong>{blog}
                            </>}
                        </li>
                    </ul>
            </div>

        </div>
        <div className='card text-center'>
              <div className='badge badge-primary'>
                Followers: {followers}
                </div>    
                <div className='badge badge-success'>
                Following: {following}
                </div> 
                <div className='badge badge-danger'>
                Public Repos: {public_repos}
                </div>               
                <div className='badge badge-dark'>
                Public Gists: {public_gists}
                </div> 
                {repos && <Repos repos={repos}/>}
        </div>
    </div>
  )
}
}

export default User
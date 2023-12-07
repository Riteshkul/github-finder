import React, { useContext, useState } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = (props) => {
    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext)
    
    const[text,setText]=useState('')
    const onChange=(e)=>{
        setText(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            alertContext.setAlert('please enter something','light');
        }
        else{
            githubContext.searchUsers(text);
            setText('')
        }
        
    }
    return (
    <div>
        <form className='form' onSubmit={onSubmit}>
            <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange}/>
            <input type='submit' value='Search' className='btn btn-dark btn-block' />

        </form>
        {
            githubContext.users.length>0 &&
            <button className='btn btn-block btn-dark' onClick={githubContext.clearUsers}>Clear</button>
        }
            
    </div>
  )
}

export default Search
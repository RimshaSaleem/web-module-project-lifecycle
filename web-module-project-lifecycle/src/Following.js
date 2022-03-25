import React from 'react'
class Following extends React.Component{


    


    render(){
        return(
            <div>
                { this.props.following.map(following =>{
                    return( <div key={following.id}>
                        <img width='30%' src={following.avatar_url} alt ={following.login} />
                        <h2>{following.login}</h2>
                        <p>{following.following}</p>
                        <p>{following.location}</p>
                    </div>)
                })}
            </div>
        )
    }
}
export default Following
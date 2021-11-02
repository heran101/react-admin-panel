

function texter(props){
    return (
        <h2 style={{color:props.kalat == 'Bisrat' ? 'green' : 'red'}}>{props.kalat}</h2>
    )
}

export default texter;
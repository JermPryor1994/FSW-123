
function CardBox(props){
    return (
        <div className='cardBox' style={{width:props.width, backgroundColor:props.backgroundColor}}>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <h3>{props.description}</h3>
        </div>
    );
}

export default CardBox
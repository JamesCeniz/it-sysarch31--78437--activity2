import './student.css';

function Student({Name,Email,Image,}){

    return(
      <div className="card">
        <img className="card-image" src={Image} alt=""></img>
        <h2 className = "card-title">{Name}</h2>
        <p className = "card-text">{Email}</p>
      </div>
    );

}

export default Student 
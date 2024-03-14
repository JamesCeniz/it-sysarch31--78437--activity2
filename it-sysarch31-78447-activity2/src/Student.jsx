import profilepic from './assets/download.jfif'

function Student(){

    return(
      <div className="card">
        <img className="cardimage"src={profilepic} alt="profile picture"></img>
        <h2 className="card-title">Francis Bien</h2>
        <p className="card-text">francisbien12@gmail.com</p>
      </div>
    );

}

export default Student
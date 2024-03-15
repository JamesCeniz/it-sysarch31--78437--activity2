import Student from "./Student";

function List(){
    const studentList = {
        stud1:{
            fname: 'Francis Bien Adolfo',
            email: 'francisbien12@gmail.com',
            photo: "https://i.ibb.co/vY1fqZ0/stud1.jpg"
        },
        stud2:{
            fname: 'Dominic Restauro',
            email: 'dominic@gmail.com',
            photo: "https://th.bing.com/th/id/R.7ce844116a9679f2dacfb8876623bbd3?rik=4C6SOozG8eIhPg&riu=http%3a%2f%2ffc04.deviantart.net%2ffs70%2fi%2f2013%2f160%2fd%2fa%2ffinn_the_human_by_andiscissorhands-d68g4d3.jpg&ehk=rO74K%2bmfOtO8DuQIkp7hcCGXaide2IrMPGiJ%2fGN8k4M%3d&risl=&pid=ImgRaw&r=0"
        },
        stud3:{
            fname: 'Arha Mia Pailmao',
            email: 'miapailmao143@gmail.com',
            photo: "https://i.ibb.co/ygKvNFX/429495349-3512847358860708-3969047856215709109-n.jpg"
        },
        stud4:{
           fname: 'James Anthony Ceniza',
            email:'jamesniza1@gmail.com',
            photo: "https://i.ibb.co/pf4zqVH/1-8r-t.jpg"
        },
        stud5:{
            fname: 'Kamisato Ayato',
            email: 'Ayato1@gmail.com',
            photo: "https://i.ibb.co/S0xz0Xx/377315914-1461352611102485-207311402986252138-n.jpg"
        }
    }
    return(
       <>
          {Object.keys(studentList).map((key) => {
            const student = studentList[key];
            return (
              <Student
                key = {key}
                Name = {student.fname}
                Email = {student.email}
                Image = {student.photo}
                className ="student"
                />
            );
          })}
      </>
    );
}

export default List
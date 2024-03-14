import Student from "./Student";

function List(Student){
    const Student = [{id: 1, name:"John Doe",email: "john@doe.com"},
                      {id: 2, name:"Juan Tan",email: "juan@tan.com"},
                      {id: 3, name:"Dominic Restauro",email: "dominic@restauro.com"}];
    

        const list = Student.map(Student => <Student/>);

        return(<ol>{list}</ol>);
}

export default List
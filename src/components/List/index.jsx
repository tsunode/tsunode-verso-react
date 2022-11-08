import Card from "../Card";

const List = () => {
    const users = [
        {
            surname: 'Tsunode',
            age: 24,
            name: 'Gabriel'
        },
        {
            surname: 'Tsunode',
            age: 35,
            name: 'João'
        },
        {
            surname: 'Tsunoda',
            age: 25,
            name: 'Gabriel'
        },
        {
            surname: 'Fernandes',
            age: 27,
            name: 'Arielle'
        },
        {
            surname: 'Fernandes',
            age: 32,
            name: 'Lucas'
        },
    ]


    return(
        <ul>
            {
                users.map((user, index) => 
                    <Card key={index} {...user} />
                )
            }
        </ul>
    )
}

export default List;

// users.map((user) => 
//  <li>{user.surname} - {user.age} - {user.name}</li> 
// )

// users.map((user) => {
//  return <li>{user.surname} - {user.age} - {user.name}</li> 
// })
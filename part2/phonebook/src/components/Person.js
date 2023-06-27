const Person = ({ person, removePerson }) => {
    return (
        <div key={person.id}>
          {person.name} {person.number} <button onClick={removePerson}>remove</button>
        </div>
    )
  }
  
  export default Person
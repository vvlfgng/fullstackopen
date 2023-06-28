import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const person = {
      name: newName,
      number: newNumber,
    }
    
    if (persons.find(personOld => personOld.name === person.name)) {
      if (window.confirm(`Are you sure you want to update ${person.name} number?`)) {
        personsService
          .update(persons.find(personOld => personOld.name === person.name).id, person)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === updatedPerson.id? updatedPerson : person))
            setNewName('')
            setNewNumber('')
            setNotificationType('notification-success')
            setNotificationMessage(`Changed ${updatedPerson.name}'s number`)
            setTimeout(() => {
              setNotificationMessage(null)
              setNotificationType(null)
            }, 3000)
          })
          .catch(error => {
            setNotificationType('notification-error')
            setNotificationMessage(`Failed to change ${person.name}'s number`)
            setTimeout(() => {
              setNotificationMessage(null)
              setNotificationType(null)
            }, 3000)
          })
        return
      }
    }

    personsService
    .create(person)
    .then(newPerson => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      setNotificationType('notification-success')
      setNotificationMessage(`Added ${person.name}'s number`)
      setTimeout(() => {
        setNotificationMessage(null)
        setNotificationType(null)
      }, 3000)
    })
    .catch(error => {
      setNotificationType('notification-error')
      setNotificationMessage(`Failed to add ${person.name}'s number`)
      setTimeout(() => {
        setNotificationMessage(null)
        setNotificationType(null)
      }, 3000)
    })
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const removePerson = (id) => {
    if (window.confirm(`Are you sure you want to delete ${persons.find(person => person.id === id).name}?`)) {
      personsService.remove(id)
      .then(removedPerson => {
        setPersons(persons.filter(person => person.id!== id))
        setNotificationType('notification-success')
        setNotificationMessage(`Removed ${removedPerson.name}'s number`)
        setTimeout(() => {
          setNotificationMessage(null)
          setNotificationType(null)
        }, 3000)
      })
      .catch(error => {
        setNotificationType('notification-error')
        setNotificationMessage(`Failed to remove ${persons.find(person => person.id === id).name}'s number`)
        setTimeout(() => {
          setNotificationMessage(null)
          setNotificationType(null)
        }, 3000)
      })
    }
  }

  const personsToShow = newSearch.length<=0? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter value={newSearch} onChange={handleSearchChange} />
      <h3>Add new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      {personsToShow.map(person => <Person key={person.id} person={person} removePerson={() => removePerson(person.id)} />)}
    </div>
  )
}

export default App
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'There are two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.',
    'Debugging is like being the detective in a crime movie where you\'re also the murderer.',
    'It\'s not a bug; it\'s an undocumented feature.',
    'The best code is no code at all.',
    'Premature optimization is the root of all evil (or at least most of it) in programming.',
    'If you think good code is expensive, try bad code.',
    'Documentation is a love letter to your future self.',
    'The sooner you start coding, the longer the program will take.',
    'The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.',
    'A user interface is like a joke. If you have to explain it, it\'s not that good.',
    'Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.',
    'The only constant in software development is change.',
    'There are only two hard things in computer science: cache invalidation and naming things. And off-by-one errors.',
    'Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics; i.e., it always increases.',
    'The code you write today will be legacy code by tomorrow.',
    'Simplicity is the soul of efficiency.',
    'If it\'s not tested, it\'s broken.',
    'A well-written program is its own heaven; a poorly-written program is its own hell.',
    'Programming languages are like cars. Some are fast and powerful, some are safe and reliable, and some are just fun to drive.',
    'Programmers don\'t die, they just get garbage collected.'
  ]
  
  //generate a random number to select a random anecdote from anecdotes
  const randomAnecdote = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const [selected, setSelected] = useState(randomAnecdote())

  const handleAnecdoteSelection = () => {
    setSelected(randomAnecdote())
  }



  return (
    <div>
      {anecdotes[selected]} <br />
      <button onClick={handleAnecdoteSelection}>Random Anecdote</button>
    </div>
  )
}

export default App
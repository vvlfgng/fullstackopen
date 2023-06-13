import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
    {props.text} {props.value}
    </>
  )
}

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad
  if (all === 0) {
    return (
      <>
      No feedback given
      </>
    )
  }
  return (
    <>
    <StatisticLine text="good" value ={props.good} /><br/>
    <StatisticLine text="neutral" value ={props.neutral} /><br/>
    <StatisticLine text="bad" value ={props.bad} /><br/>
    <StatisticLine text="all" value ={all} /><br/>
    <StatisticLine text="average" value ={(props.good-props.bad)/(all)} /><br/>
    <StatisticLine text="positive" value ={(props.good/(all)*100)} /> %
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const [neutral, setNeutral] = useState(0)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const [bad, setBad] = useState(0)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='neutral'/>
      <Button handleClick={increaseBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
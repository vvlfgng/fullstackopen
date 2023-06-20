const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part => <Part part={part} key={part.id} />)
  )
}

const Total = (props) => {
  const total = props.total.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}

const Course = (props) => {
  return (
    <>
    <Header course={props.course.name} />
    <Content parts={props.course.parts} />
    <Total total={props.course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
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
    <p><b>total number of exercises {total}</b></p>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total total={course.parts} />
    </>
  )
}

export default Course
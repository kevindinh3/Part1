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
      },
      {
        name: 'Blah blah blah',
        exercises: 23,
        id: 4
      }
    ]
  }
  
  return <Course course={course}/>
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const AllParts = (props) => {
  return(
    <div>
      {props.result}
    </div>
  )
}

const Content = (props) => {
  const result = props.parts.map(part => 
    <p key={part.id}>{[part.name,part.exercises].join(" ")}</p>
  )
  return (
    <div>
      <AllParts parts={props.parts} result={result}/>
    </div>
  )
}

const Total = (props) => {
  const number = props.parts.map(part => part.exercises);
  const sum = number.reduce((a,b) => a + b,0);
  return (
    <b>{sum}</b>
  )
}

export default App

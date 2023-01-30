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

const Course = ({course}) => {
  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>
      {course.name}
    </h1>
  )
}

const AllParts = ({result}) => {
  return(
    <div>
      {result}
    </div>
  )
}

const Content = ({parts}) => {
  const result = parts.map(part => 
    <p key={part.id}>{[part.name,part.exercises].join(" ")}</p>
  )
  return (
    <div>
      <AllParts parts={parts} result={result}/>
    </div>
  )
}

const Total = ({parts}) => {
  const number = parts.map(part => part.exercises);
  const sum = number.reduce((a,b) => a + b,0);
  return (
    <b>{sum}</b>
  )
}

export default App

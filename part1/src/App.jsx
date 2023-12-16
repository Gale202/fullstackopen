const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Nombre del Curso {props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course.parts[0].name} : {props.course.parts[0].exercises1}</p>
      <p>{props.course.parts[1].name} : {props.course.parts[1].exercises2}</p>
      <p>{props.course.parts[2].name} : {props.course.parts[2].exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Total = {props.course.parts[0].exercises1 + props.course.parts[1].exercises2 + props.course.parts[2].exercises3}</p>
    </div>
  )
}

const App = () => {

  const course = { 
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises1: 10
    },
    {
      name: 'Using props to pass data',
      exercises2: 7
    },
    { 
      name: 'State of a component',
      exercises3: 14
    }]
    }
    return (
      <div>
        <Header course = {course}/>
        <Content course = {course} />
        <Total course = {course} />
      </div> 
    )
}

export default App
const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Nombre del Curso {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.parts[0].name} : {props.parts[0].exercises1}</p>
      <p>{props.parts[1].name} : {props.parts[1].exercises2}</p>
      <p>{props.parts[2].name} : {props.parts[2].exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Total = {props.parts[0].exercises1 + props.parts[1].exercises2 + props.parts[2].exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const parts = [{
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

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Total parts = {parts} />
    
    </div> 
  )
}

export default App
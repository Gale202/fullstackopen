const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Nombre del Cruso {props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part1} {props.exercises1}
      {props.part2} {props.exercises2}
      {props.part3} {props.exercises3}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part1 = {props.part1} exercises1 = {props.exercises1} />
      <Part part2 = {props.part2} exercises2 = {props.exercises2}/>
      <Part part3 = {props.part3} exercises3 = {props.exercises3}/>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises1: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises2: 7
  }
  const part3 = { 
    name: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1.name} exercises1 = {part1.exercises1}
      part2 = {part2.name} exercises2 = {part2.exercises2}
      part3 = {part3.name} exercises3 = {part3.exercises3}/>
      
      <p>Number of exercises {part1.exercises1 + part2.exercises2 + part3.exercises3}</p>
    </div>
  )
}

export default App
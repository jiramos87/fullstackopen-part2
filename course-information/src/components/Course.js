import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    ) 
  }
  
const Total = ({ course }) => {
    const reducer = (previous, current) => previous + current
    const exercisesArray = course.parts.map((part) => part.exercises)
    const sum = exercisesArray.reduce(reducer)


    return(
        <p><b>Total of exercises {sum}</b></p>
    ) 
}

const Part = (props) => {
return (
    <p>
    {props.part.name} {props.part.exercises}
    </p>    
)
}

const Content = ({ course }) => {

return (
    <div>
    {course.parts.map(part => {
        return <Part key={part.id} part={part}/>})
    }
    </div>
)
}

const Course = (props) => {
    return (
      <div>
        <Header course={props.course} />
        <Content course={props.course} />
        <Total course={props.course} />
      </div>
    )
}

export default Course
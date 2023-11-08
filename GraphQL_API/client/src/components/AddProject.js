import React, { useState } from 'react';
import { AddProjectMutation } from '../queries/queries.js';


function AddProject(props) {

  const [inputsProject, setInputsProject] = useState({
    title: '',
    weight: 1,
    description: ''

  });

  const handleChange = (e) => {
    const newInputsProject = {
      ...inputsProject
    };
    if (e.target.name === "weight") newInputsProject[e.target.name] = parseInt(e.target.value)
    else newInputsProject[e.target.name] = e.target.value
    setInputsProject(newInputsProject)
  }

  const subitForm1 = (e) => {
    e.preventDefault();
    props.addProjectMutation({
      variables: {
        title: inputsProject.title,
        weight: inputsProject.weight,
        description: inputsProject.description,
        user_id: props.user_id
  },
  refetchQueries: [{ query: getProjectsQuery }]
});
}

  return ( <form class = "project" id = "add-project" onSubmit = {subitForm1}>
    <div className = "field" >
    <label > Project title: </label>
    <input type = "text"
    name = "title"
    onChange = {
      handleChange
    }
    value = {
      inputsProject.title
    }
    /> </div > <div className = "field" >
    <label > Weight: </label>
    <input type = "number"
    name = "weight"
    onChange = {
      handleChange
    }
    value = {
      inputsProject.weight
    }
    / > </div >
    <div className = "field" >
    <label > description: </label>
    <textarea name = "description"
    onChange = {
      handleChange
    }
    value = {
      inputsProject.description
    }
    / > </div >
    <button > + </button> </form >
  );
}

export default compose(
graphql(addProjectMutation, {name: "addProjectMutation" })
)(AddProject);

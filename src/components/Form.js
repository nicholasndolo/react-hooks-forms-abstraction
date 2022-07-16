import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

  // function handleFirstNameChange(event) {
  //   // setFirstName(event.target.value);
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   })
  // }

  // function handleLastNameChange(event) {
  //   // setLastName(event.target.value);
  //   setFormData({
  //     ...FormData,
  //     lastName: event.target.value,
  //   })
  // }

  function handleChange(event){
    // name is the key in the formData we aretrying to update
    const name = event.target.name;
    const value = event.target.value;

   // use `checked` property of checkboxes instead of `value`
   if (event.target.type === "checkbox") {
     value = event.target.checked;
   }
    setFormData({
      ...formData,
      [name]: value,

    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} on>
      <input type="text" 
             name = "FirstName"
             value={formData.firstName} 
             onChange={handleChange} />
      <input type="text" 
             name = "LastName" 
             value={formData.lastName} 
             onChange={handleChange}/>
      <input type = "checkbox"
             name = "admin"
             checked = {formData.admin}
             onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

import { Formik, Form, Field } from "formik";

export const MaterialForm = ({ onSubmit }) => {

const handleSubmit = async (value, actions) => {
await onSubmit(value);
actions.setSubmitting(false);
actions.resetForm();
}

return(
<Formik initialValues={{title:"", link:""}} onSubmit={handleSubmit}>
  {({ isSubmitting }) => (   
 <Form>      
 <label>
     Description
     <br />
 <Field name="title" type="text" />
 </label>
 <br />
 <label>
     Link
     <br />
 <Field name="link" type="text" />
 </label> 

 <button type="submit" disabled={isSubmitting}>Add material</button>
</Form>
  )}  
   
</Formik>

)}


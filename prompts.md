1) I need to build a multi step registration wizard in React.
Please use a simple example with three form steps and explain how data persists when navigating back and forth.

2) Is this the correct way to store form data:

const [formData, setFormData] = useState(
    [
      firstName = '',
      lastName = '',
      dob = ''
    ]
  )

3) How do I change the lable of the submit button from my handleSubmit function?

4) how to set time duration for switching back the button label?

5) I'm thinking of using useState to implement real time field validation.

For example:

const [fieldClass, setFieldClass] = useState("field");


If I do it this way I will have to make state for each field. Is that the right approach?

6) How to disable a button in react?
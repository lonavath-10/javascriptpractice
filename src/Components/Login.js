import { useState } from "react";

const Login = (props) => {

    let [ userEmail,setUserEmail] = useState ('');
    let [userPassword,setUserPassword] = useState('');
     const submitFormHandler = (event) => {
         event.PreventDefault();

         console.log('event---',event);
         console.log('useremail---',userEmail);
         console.log('userPassword----',userPassword);
         if(userEmail == 'lonavathanilkumar1998'&& userPassword === 'Abcd@123'){
             props.history.push('/person');

         }else {
             alert('Invalid credentials');
         }

     }
    return (
        <div>
            <h1>
                user Login
            </h1>
            <form onSubmit = {submitFormHandler}>
                <div><label>Enter Email</label>
                <input onChange = {(event) => {
                    setUserEmail(event.target.value)
                }} type="text"/>
                </div>
                <div>
                    <label>Enter password</label>
                    <input onChange = {(event) => {
                        setUserPassword(event.target.value)
                    }} type="password"/>
                </div>
                <div>
                    <button>submit</button>
                </div>
            
            </form>
        </div>
    )
}
export default Login; 
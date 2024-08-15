import { useRef, useState } from 'react'
import './Form.css'
import {validateName,validateEmail,validatePassword,validateDob,validateGender,validateCountry} from './validation';
import useFormInput from './useFormInput';



const Form = () => {
  const submitRef = useRef(null)
  const name = useFormInput('', validateName);
  const email = useFormInput('', validateEmail);
  const dob = useFormInput('', validateDob);
  const password = useFormInput('', validatePassword);
  const gender = useFormInput('', validateGender);
  const [newValue, setNewValue] = useState('');
  const country = useFormInput('', validateCountry);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger validation for all fields
    name.onChange({ target: { value: name.value } });
    email.onChange({ target: { value: email.value } });
    password.onChange({ target: { value: password.value } });
    dob.onChange({ target: { value: dob.value } });
    gender.onChange({ target: { value: gender.value } });
    country.onChange({ target: { value: country.value } });

    if (name.value && email.value && password.value && dob.value && gender.value && country.value &&
      !name.error && !email.error && !password.error && !dob.error && !gender.error && !country.error) {

      name.reset();
      email.reset();
      password.reset();
      dob.reset();
      gender.reset();
      country.reset();
      setNewValue('');

      alert("Your form is submitted");
    } else {
      console.log("Please fill out all fields correctly before submitting.");
    }
  };

  const click = (event) => {
    setNewValue(event.target.value)
  }

  

  return (
    <div className='Form-content'>
      <div className="form-body">
        <form className='inputs' onSubmit={handleSubmit}>

          <div className="input">
            
            <label className='labels label-heading'>Name :</label>
              <input type="text" value={name.value} onChange={name.onChange} className='napassdob' placeholder='Enter your name here...'/>
            {name.error && <p className='error'>{name.error}</p>}
            
          </div>

          <div className="input">
            <label className="labels label-heading" >Email :</label>
            <input type="text" value={email.value} onChange={email.onChange} className='napassdob' placeholder='Enter your email here...' />
            {email.error && <p className='error'>{email.error}</p>}
          </div>


          <div className="input">
            <label className='labels label-heading'>Password :</label>
            <input type="password" value={password.value} onChange={password.onChange} className='napassdob' placeholder='Enter your password here...' />
            {password.error && <p className='error'>{password.error}</p>}
          </div>


          <div className="input">
            <label className='labels label-heading' >Date of Birth :</label>
            <input type="date" value={dob.value} onChange={dob.onChange} className='napassdob' placeholder='Enter your dob here...' />
            {dob.error && <p className='error'>{dob.error}</p>}
          </div>


          <div className="check-input"  >
            <label className='label-heading'>Hobbies :</label>
            <div className='check1'>
              <label className='box' >
                <input type="checkbox" value="sports"  />
                 sports</label>
              <label className='box'  >
                <input type="checkbox" value="Traveling" />
                 Traveling</label>
            </div>
            
            <div className='check2'>
              <label className='box'  >
                <input type="checkbox" value="Reading" />
                 Reading</label>

              <label className='box' >
                <input type="checkbox" value="Cooking"  />
                 Cooking</label>
            </div>
           

          </div>

          <div className="input">
            <label className='label-heading' >Gender :</label>
            <select name="gender" className='napassdob' value={gender.value} onChange={gender.onChange} >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">TransGender</option>
            </select>
            {gender.error && <p className='error'>{gender.error}</p>}
          </div>

          <div className="input">
            <label className='label-heading'>Nationality :</label>
            <select onChange={country.onChange} value={dob.country} className='napassdob' >
              <option value="" >Select your country</option>
              <option value="1">India</option>
              <option value="2" >Others..</option>
              {newValue && (<option value="3">{newValue}</option>)}
            </select>
            {country.error && <p style={{ color: 'red', fontSize: '12px', width: '80%' }}>{country.error}</p>}
            {country.value === "2" && (<input type="text" placeholder='Enter Your Region..' onChange={click} style={{width:'80%',height:'4vh'}} />)}
          
          </div>

          <button type='submit' ref={submitRef} className='submit-button'> Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
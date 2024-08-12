import { useRef, useState } from 'react'
import './Form.css'



const Form = () => {
  const [name, setName] = useState('')
  const [nameError, setnameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState(''); 
  const [passwordError, setPasswordError] = useState('')
  const [genderError, setGenderError] = useState('')
  const [dob, setDob] = useState('')
  const [dobError, setDobError] = useState('')
  const [country, setCountry] = useState('')
  const[countryError,setCountryError]=useState('')
  const [newValue, setNewValue] = useState('')
  const submitRef = useRef(null)

 




  const handleNameChange = (e) => {
    const val = e.target.value;
    const nameStructure = /^[a-zA-Z\s]*$/; 

    if (!nameStructure.test(val)) {
      setnameError("Please enter text only (letters and spaces)");
    } else {
      setnameError('');
      setName(val);
    }
  };


  const handleEmailChange = (e) => {
    const emailStructure = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const val = e.target.value;
    setEmail(val)

    if (!emailStructure.test(email)) {
      setEmailError("This field must have a valid email format.")
    } else {
      setEmailError('')
    }

  }

  const handlePasswordChange = (e) => {
    const passwordStructure = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    setPassword(e.target.value)
    if (!passwordStructure.test(password)) {
      setPasswordError("minimum 8 character,1 upper&lower case letter,1number,1spcial character")
    } else {
      setPasswordError('')
    }

  }
  const handlegenderchange = (e) => {
    const val = e.target.value
    setGender(val)
    if (val === "") {
      setGenderError('select your Gender!!!')
    } else {
      setGenderError('')
    }
  }




  const handleDataofBirth = (e) => {
    const val = e.target.value
    setDob(val)
    const date = new Date(val);
    const today = new Date()

    if (date > today) {
      setDobError("Tha DOB should be past Date")
    } else {
      setDobError('')
    }

  }

  const handleOther = (e) => {
   const val=setCountry(e.target.value)
    setCountry(val)
    if (val === "") {
      setGenderError('select your Gender!!!')
    } else {
      setGenderError('')
    }
  }


  const click = (event) => {
    setNewValue(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && password && email && dob) {
      alert("Your form is submitted")
      setCountry('')
      setDob('')
      setEmail('')
      setName('')
      setPassword('')
    } else {
      if (name==='') {
        setnameError("Fill this field");
      }
      else if (email === '') {
        setEmailError('Please enter you email until you cannot submit the form')
      }
      else if (dob === '') {
        setDobError('Enter your data birth')
      } else if(password===''){
        setPasswordError('Set Your password')
      } else if (gender === '') {
        setGenderError('you have not selected your gender!!')
      } else if(country===''){
        setCountryError('Select your Country!!!!')
      }

    }


  }

  return (
    <div className='Form-content'>
      <div className="form-body">
        <form className='inputs' onSubmit={handleSubmit}>

          <div className="input">
            
            <label className='labels' style={{ fontSize: '12px', width: '90%', color: 'blue',fontWeight:'bold' }}>Name :</label>
              <input type="text" value={name} onChange={handleNameChange} className='napassdob' placeholder='Enter your name here...'/>
            {nameError && <p style={{ color: 'red', fontSize: '12px' }}>{nameError}</p>}
            
          </div>

          <div className="input">
            <label className="labels" style={{ fontSize: '12px', width: '90%', color: 'blue', fontWeight: 'bold' }} >Email :</label>
            <input type="text" value={email} onChange={handleEmailChange} className='napassdob' placeholder='Enter your email here...' />
            {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
          </div>


          <div className="input">
            <label className='labels' style={{ fontSize: '12px', width: '90%', color: 'blue', fontWeight: 'bold' }}>Password :</label>
            <input type="password" value={password} onChange={handlePasswordChange} className='napassdob' placeholder='Enter your password here...' />
            {passwordError && <p style={{ color: 'red', fontSize: '12px',width:'82%' }}>{passwordError}</p>}
          </div>


          <div className="input">
            <label className='labels' style={{ fontSize: '12px', width: '90%', color: 'blue', fontWeight: 'bold' }} >Date of Birth :</label>
            <input type="date" value={dob} onChange={handleDataofBirth} className='napassdob' placeholder='Enter your dob here...' />
            {dobError && <p style={{ color: 'red', fontSize: '12px', width: '80%' }}>{dobError}</p>}
          </div>


          <div className="check-input"  >
            <label style={{ fontSize: '12px', width: '90%', color: 'blue', fontWeight: 'bold' }}>Hobbies :</label>
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
            <label style={{ fontSize: '12px', width: '90%', color: 'blue', fontWeight: 'bold' }} >Gender :</label>
            <select name="gender" className='napassdob' value={gender} onChange={handlegenderchange} >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">TransGender</option>
            </select>
            {genderError && <p style={{ color: 'red', fontSize: '12px', width: '80%' }}>{genderError}</p>}
          </div>

          <div className="input">
            <label style={{ fontSize: '12px', width: '90%', color: 'blue', fontWeight: 'bold' }}>Nationality :</label>
            <select onChange={handleOther} value={country} className='napassdob' >
              <option value="" >Select your country</option>
              <option value="1">India</option>
              <option value="2" >Others..</option>
              {newValue && (<option value="3">{newValue}</option>)}
              {countryError && <p style={{ color: 'red', fontSize: '12px', width: '80%' }}>{countryError}</p>}
            </select>
            {country === "2" && (<input type="text" placeholder='Enter Your Region..' onChange={click} style={{width:'80%',height:'4vh'}} />)}
          
          </div>

          <button type='submit' ref={submitRef} className='submit-button'> Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
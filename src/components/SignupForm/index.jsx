import React, { useState } from 'react'

const SignupForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phone, setPhone] = useState('')

  const handleClearClick = () => {
    setName('')
    setAge('')
    setAddress('')
    setZipcode('')
    setPhone('')
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('form submitted', {
      name,
      age,
      address,
      zipcode,
      phone
    })
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Name
        <input value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Age
        <input value={age} onChange={e => setAge(e.target.value)} required />
      </label>
      <br />

      <label>
        Adress
        <input value={address} onChange={e => setAddress(e.target.value)} required />
      </label>
      <br />

      <label>
        Zipcode
        <input value={zipcode} onChange={e => setZipcode(e.target.value)} required />
      </label>
      <br />

      <label>
        Phone
        <input value={phone} onChange={e => setPhone(e.target.value)} required />
      </label>
      <br />
      <div>
        <button type='button' onClick={handleClearClick}>Clear</button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default SignupForm

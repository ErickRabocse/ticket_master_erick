import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form' // hook used to simplify forms.
import styles from './MyInfo.module.css'

const MyInfo = () => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm()
  // hadleSubmit-fn goes inside main-onSubmit-fn & takes as param a custom-handleFormSubmit-fn
  // ...register replaces the need of using --> value & onChange to store the input values!
  // setValue is used inside useEffect --> try/catch to pre-load values in specific-selected inputs
  const USER_DATA = 'userData' // variable that will store the user-data-object.
  const handleFormSubmit = (data) => { // This fn takes the data-object w/ the info obtained by the form
    try { // e.preventDefault() --> no longer needed
      // JSON.stringify is used to save arrays & objects!
      localStorage.setItem(USER_DATA, JSON.stringify(data)) // saving the data-object into localStorage
      console.log(data)
    } catch (error) {
      alert(error)
    }
  }
  console.log(errors)
  // To preserve the information stores in localStorage use useEffect.
  // This pre-loads the information in the form when the component is loaded/mounted.
  useEffect(() => {
    try { // userData will store the object-user retrieved from localStorage. It has to be parsed!
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {} // if empty returns empty {}
      // setValue takes as 1st param the name of the input to be modified followed by the info that will fill it.
      setValue('name', userData?.name) // use the short-circuit!
      setValue('email', userData?.email)
      setValue('age', userData?.age)
    } catch (error) {
      console.log(error)
    }
  }, [setValue]) // This will only rerendered when setValue is updated.
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Nombre
        <input
          className={styles.input}
          {...register('name', { required: true, minLength: 1, maxLength: 120 })}
        />
        {/* <input  value={name} onChange={e => setName(e.target.value)} required/> */}
        {/* required should be placed inside ...register after the input key/name */}
      </label>
      <label className={styles.label}>
        Correo electrónico (email)
        <input
          className={styles.input}
          {...register('email', { required: true })}
        />
      </label>
      <label className={styles.label}>
        Edad
        <input
          className={styles.input}
          {...register('age', { required: true, min: 1, max: 120, valueAsNumber: true })}
          type='number'
        />
      </label>
      <button type='submit' className={styles.submitButton}>Guardar</button>
    </form>
  )
}
export default MyInfo

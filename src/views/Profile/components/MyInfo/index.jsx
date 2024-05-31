import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styles from './MyInfo.module.css'

const MyInfo = () => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm()
  const USER_DATA = 'userData'
  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data))
      console.log(data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
      setValue('name', userData?.name)
      setValue('email', userData?.email)
      setValue('age', userData?.age)
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input className={styles.input} {...register('name', { required: true, minLength: 1, maxLength: 120 })} />
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} {...register('email', { required: true })} />
      </label>
      <label className={styles.label}>
        Age
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

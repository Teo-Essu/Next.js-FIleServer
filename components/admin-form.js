'use client';
import { useFormState } from 'react-dom';
import styles from './admin-form.module.css';
import { createFile } from '@/actions/admin/admin-actions';
import { useState } from 'react';

export default function AdminForm(){
    const [formState, formAction] = useFormState(createFile, {});

    return(
        <section>
        <div className='container'>
            <h1 className='mb-4 mt-4'>Admin Panel </h1>
            <form action={formAction}>
                <div className='form-group'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='form-control'
                        // onChange={}
                        // value={title}
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        className='form-control'
                        // onChange={}
                        // value={description}
                        rows='3'
                        autoComplete='off'
                        required
                    />
                </div>
                <div>
                    <input className='mt-2' required type="file" id='file' name='file' />
                    {/* <button className='btn btn-secondary mt-3'>Upload file</button> */}
                </div>
                {formState.errors && (
                  <ul id={styles.form_errors}>
                    {Object.keys(formState.errors).map((error) => (
                      <li key={error}>{formState.errors[error]}</li>
                    ))}
                  </ul>
                )}
                <button type='submit' className='btn btn-primary mt-3'>{"Send"}</button>
            </form>
        </div>
    </section>
    );
}
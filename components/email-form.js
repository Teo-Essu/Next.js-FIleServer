'use client';
import { sendEmail } from "@/actions/email/email-actions";
import { useFormState } from 'react-dom';

export default function SendEmail(){
    const [formState, formAction] = useFormState(sendEmail, {});
    return(
            <section>
                <div className='container'>
                    <h1 className='mb-4 mt-4'>Send File To an Email </h1>
                    <form action={formAction}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                className='form-control'
                                // onChange={handleChange}
                                // value={formData.email}
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='subject'>Subject:</label>
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                className='form-control'
                                // onChange={handleChange}
                                // value={formData.subject}
                                autoComplete='off'
                                required
                            />
                        </div>
                        {/* <div className='form-group'>
                            <label htmlFor='email'>Body:</label>
                            <textarea
                                type='text'
                                id='body'
                                name='body'
                                className='form-control'
                                rows='5'
                                autoComplete='off'
                                required
                            />
                        </div> */}
                        {formState.errors && (
                          <ul id={styles.form_errors}>
                            {Object.keys(formState.errors).map((error) => (
                              <li key={error}>{formState.errors[error]}</li>
                            ))}
                          </ul>
                        )}
                        <button type='submit' className='btn btn-primary mt-3'>Send</button>
                    </form>
                </div>
            </section>
    );
}
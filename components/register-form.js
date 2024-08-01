'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { register } from '@/actions/auth/auth-actions';
import styles from './register-form.module.css';

export default function RegisterForm() {
  const [formState, formAction] = useFormState(register, {});
  return (
    <form id={styles.auth_form} action={formAction}>
      <div>
        {/* <img src="/images/auth-icon.jpg" alt="A lock icon" /> */}
        <h1>Log-In</h1>
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id={styles.email} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id={styles.password} />
      </p>
      {formState.errors && (
        <ul id={styles.form_errors}>
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
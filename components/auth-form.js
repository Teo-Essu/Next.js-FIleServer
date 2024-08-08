'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { auth } from '@/actions/auth/auth-actions';
import styles from './auth-form.module.css';

export default function AuthForm({ mode }) {
  const [formState, formAction] = useFormState(auth.bind(null, mode), {});
  return (
    <form id={styles.auth_form} action={formAction}>
      <div>
        {/* <img src="/images/auth-icon.jpg" alt="A lock icon" /> */}
        <h1>
          {mode === 'login' ? "Log-In": "Register"}
        </h1>
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
        <button type="submit">
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/auth/?mode=register">Create an account.</Link>}
        {mode === 'register' && <Link href="/auth/?mode=login">Login with existing account.</Link>}
      </p>
    </form>
  );
}
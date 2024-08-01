'use server';

import { redirect } from "next/navigation";

export async function register(prevState, formData){
    console.log(formData);
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
      errors.email = 'Please enter a valid email address.';
    }
    
    if (password.trim().length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (Object.keys(errors).length > 0) {
      return {
        errors,
      };
    }

    try {
      const response = await fetch('http://localhost:3500/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email,
              password
          })
      });

      if (!response.ok) {
          const errorData = await response.json();
          return {
              errors: {
                  server: errorData.message || 'Oops, trouble registering.',
              },
          };
      }
      // If the request is successful, redirect to /files
      redirect('/files');

  } catch (error) {
      return {
          errors: {
              server: 'An error occurred while registering.',
          },
      };
  }
}
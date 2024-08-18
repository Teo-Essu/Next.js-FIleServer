'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import axios from "axios";

export async function register (prevState, formData){
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
        const response = await axios.post('http://localhost:3500/register', 
          {
            email,
            pwd: password
          }
        );

        console.log(response.data);

    } catch (error) {
      return {
          errors: {
              server: 'An error occurred while registering: ' + error,
          },
      };
    }

    revalidatePath("/files");
    redirect("/files");
}

export async function login (prevState, formData){
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await axios.post('http://localhost:3500/auth', 
          {
            email,
            pwd: password
          }
        );

        cookies().set(
          {
            name: 'jwt',
            value: response.data.accessToken,
            httpOnly: true,
            path: '/',
          }        
        );
      
    } catch(error) {
      return {
        errors: {
          server: "An error occured while logging-in: " + error
        }
      };
    }

    revalidatePath("/files");
    redirect("/files");
}

export async function logout() {  
  // try {
  //     await axios.get('http://localhost:3500/logout', {
  //       withCredentials: true,
  //     });
  // } catch(error) {
  //     console.log(error);
  // }
  cookies().delete('jwt');
  // redirect('/auth');
}

export async function auth(mode, prevState, formData){
  if (mode === 'login')
    return login(prevState, formData);

  return register(prevState, formData);
}
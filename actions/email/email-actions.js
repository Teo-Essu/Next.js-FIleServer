'use server';

import axios from "axios";
import { cookies } from "next/headers";

export async function sendEmail( prevState, formData ) {
    const url = cookies().get("url");
    const email = formData.get("email");
    const subject = formData.get("subject");

    try{
        const response = await axios.post(`http://localhost:3500/sendFileViaEmail?url=${url}`,
            {
                email,
                subject
            }
        );

    }catch (error){
        return {
            errors: {
              server: "An error occured while sending email: " + error
            }
          };
    }
}
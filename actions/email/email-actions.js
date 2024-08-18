'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export async function sendEmail(fileUrl, prevState, formData ) {
    const email = formData.get("email");
    const subject = formData.get("subject");

    try{
        await axios.post(`http://localhost:300/sendFileViaEmail?url=${fileUrl}`,
            {
                email,
                subject
            }
        );

        revalidatePath('/files');
        redirect('/files');

    }catch (error){
        return {
            errors: {
              server: "An error occured while sending email: " + error
            }
          };
    }
}
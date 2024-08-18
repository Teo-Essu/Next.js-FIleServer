"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createFile(prevState, formData) {
    const file = formData.get('file');
    const title = formData.get('title');
    const description = formData.get('description');
    // console.log("FormData properties: ", file, title, description);
    const data = new FormData();
    data.append('file', file);
    data.append('title', title);
    data.append('description', description);

    try{
        await axios.post('http://localhost:3500/files', data);

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
import EmailForm from "@/components/email-form";

export default function Email({ searchParams }){
    const url = searchParams.url;
    return(
        <EmailForm fileUrl = {url}/>
    )
}
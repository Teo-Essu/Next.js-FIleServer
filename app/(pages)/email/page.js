import SendEmail from "@/components/email-form";

export default function Email({ searchParams }){
    const url = searchParams.url;
    return(
        <SendEmail fileUrl = {url}/>
    )
}
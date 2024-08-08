import AuthForm from '@/components/auth-form';

export default function Auth ({ searchParams }){
    const formMode = searchParams.mode || 'login';
    return(
        <AuthForm mode = {formMode} />
    );
}
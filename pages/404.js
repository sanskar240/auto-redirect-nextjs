import next from "next";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () =>{
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    },[])

    return (
        <div className="not-found">
            <h1>Oops cant be found</h1>
            <p>Go back to the<Link  href='/'>Home Page</Link></p>
        </div>
    );
}
export default ErrorPage;
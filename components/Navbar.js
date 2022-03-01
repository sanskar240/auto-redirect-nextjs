import next from "next";
import Link from "next/link";

const Navbar = () =>{
    return (
        <div>
          
        <Link href= '/'>Home</Link>
        <Link href= '/about'>About</Link>
        <Link href=   '/projects'  >Projects</Link>
        </div>
    );
}
export default Navbar;
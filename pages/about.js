import next from "next";
import Link from "next/link";



const About  = () =>{
    return (
        <div>
            <h1>About Me Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo neque, accumsan facilisis est non, gravida euismod mi. Vivamus tincidunt dictum ipsum, sit amet rutrum massa feugiat laoreet. Nullam suscipit mi a tellus suscipit, ultrices vehicula elit feugiat. Vivamus tincidunt libero non augue scelerisque ultrices. Aenean facilisis, felis a tincidunt aliquet, libero magna malesuada orci, commodo egestas turpis est non massa. Duis in risus eu leo semper ultrices. Mauris nec felis diam. Sed in tellus sodales urna interdum feugiat. Nullam pellentesque pulvinar posuere. Ut suscipit, eros quis commodo dapibus, enim ex vestibulum est, id lobortis tortor ligula maximus ipsum.</p>
            <div className="go__back__link">
            <Link href='/'>Go to Home Page</Link>
            </div>
            
        </div>
    );
}
export default About;
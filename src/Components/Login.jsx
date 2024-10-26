import { useRef } from "react";
import { useContext } from "react";
import { context } from "./Context";
function Login()
{
    const text=useRef();
    const pass=useRef();
    const {dispatch}=useContext(context);
    const handleonsubmit=(e)=>{
        e.preventDefault();
        const textt=text.current.value;
        const pasw=pass.current.value;
        // login({textt,pasw});
        // dispatch({tye:'login',payload:{textt,pasw}});
        dispatch({type:'login',payload:{textt,pasw}})
    }
    const handlelogout=()=>{
        dispatch({type:'logout'});
    }
    return(
        <>
        <form onSubmit={handleonsubmit}>
            text:<input type="text" ref={text}/><br />
           password: <input type="password" ref={pass}/><br />
           <input type="submit" />
           <button onClick={handlelogout}>logout</button>
        </form>
        </>
    )

}
export default Login;
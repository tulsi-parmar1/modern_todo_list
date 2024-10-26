import { useContext } from "react";
import { context } from "./Context";
function Home()
{
    const {user}=useContext(context);
  
    return(
        <>
        Home {user.textt}
        </>
    )
}
export default Home;
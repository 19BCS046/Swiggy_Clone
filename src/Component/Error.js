import { useRouteError } from "react-router-dom"
export const Error=()=>{
    const err=useRouteError();
    return(
        <div className="error">
            <h1>OOPS!!!</h1>
            <h2>Someting went wrong</h2>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}
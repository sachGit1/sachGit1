import React from "react";

const Dashboard =({handleLogout})=>{
    return(
        <div>
            <h2>Admin Dashboard</h2>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Dashboard
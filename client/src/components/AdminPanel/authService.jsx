const adminCredentials ={
    username : 'admin',
    password : '1234567890',
};

export const login = (username, password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username===adminCredentials.username && password===adminCredentials.password){
                resolve(true);
            }
            else{
                reject(false);
            }
        }, 1000);
    });
};

export const logout =()=> {};
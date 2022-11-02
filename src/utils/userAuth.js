import Cookies from "js-cookie";
export const setAuthToken = (key,value) =>{
    try{
        Cookies.set(key,value,{expires:7})
        return true;
    }catch(err){
        return false;
    }
}

export const isAuth = () =>{
    const key = Cookies.get("rty5")
    return !key ? false : true;
}

export const getAuthToken = (key) =>{
    return Cookies.get(key)
}

export const setInfo = (info) =>{
    try{
        sessionStorage.setItem("info",JSON.stringify(info))
        return true
    }catch{
        return false
    }
}

export const getInfo = () =>{
    return JSON.parse(sessionStorage.getItem("info"))
}
import axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        'API-KEY':'61ec7e96-6687-4fa7-bea7-eb8933d901c4'
    }
})

export const usersAPI={
    getUsers(currentPage=1,pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },
    getProfileUser(userId){
        console.warn('Obsolete method. Please profileAPI object. ')
        return profileAPI.getProfileUser(userId)

    },
    getMeHeader(){
        return instance.get('auth/me')
            .then(response=>response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response=>response.data)

    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response=>response.data)

    }
}
export const profileAPI={
    getProfileUser(userId){
        return instance.get(`profile/${userId}`)
            .then(response=>response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
            .then(response=>response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status})
            .then(response=>response.data)
    }
}
export const loginApi={
    postLogin(email,password,rememberMe,captcha=true){
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
            .then(response=>response.data)
    }
}


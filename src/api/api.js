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
        console.warn('Obsolete method. Please profileAPI object. ')
        return authAPI.getMeHeader()
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)

    },
    follow(userId){
        return instance.post(`follow/${userId}`)

    }
}
export const profileAPI={
    getProfileUser(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status})
    },
    savePhoto(photoFile){
        let formData=new FormData();
        formData.append("image",photoFile);
        return instance.put(`profile/photo`,formData, {
            headers:{
                'Content-Type': 'form/multipart'
            }} );
    }
}
export const authAPI={
    getMeHeader() {
        return instance.get('auth/me')
    },
    Login(email,password,rememberMe=false,captcha=true){
        debugger
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    Logout(){
        return instance.delete(`auth/login`)
    },

}


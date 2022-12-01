import axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        'API-KEY':'21df4cc3-6e0a-440b-bbf8-c36e820c7de2'
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
    },
    saveProfile(profile){
        return instance.put(`profile`,profile);
    }
}
export const authAPI={
    getMeHeader() {
        return instance.get('auth/me')
    },
    Login(email,password,rememberMe=false,captcha=null){
        debugger
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    Logout(){
        return instance.delete(`auth/login`)
    },

}
export const securityAPI={
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    },
}


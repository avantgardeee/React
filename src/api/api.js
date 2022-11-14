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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response=>response.data)
    }
}


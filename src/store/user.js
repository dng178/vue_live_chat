export const user = {
    namespaced: false,
    //lưu các biến
    state: {
        user: []
    },
    //lấy thông tin biến, có thể custom giá trị để phù hợp với yêu cầu (giống computed trong vue)
    getters: {
        user: state => {
            return state.user;
        }
    },
    //cập nhật giá trị
    mutations: {
        updateUser(state, username) {
            state.user.push(username)
        },
    },
    //cập nhật giá trị (trong trường hợp cần xử lý nhiều hơn, ví dụ call api, update giá trị ở các vuex khác,...)
    actions: {
        // addUser(state, userInfo) {
        //     state.commit('updateUser', userInfo);
        // }
    }
}
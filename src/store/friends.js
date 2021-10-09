export const friends = {
    namespaced: false,
    //lưu các biến
    state: {
        friends: {
            id: 0,
            friendName: 'apple',
            friendMessage: 'This is a message from apple',
            friendCreatedDate: 'Aug 26 2021',
            friendImage: require('../assets/image/think.png'),
            userName: 'user123',
            userMessage: 'thanks apple',
            userCreatedDate: 'Aug 27 2021',
            userImage: require('../assets/image/SKR.jpg'),
        }
    },
    //lấy thông tin biến, có thể custom giá trị để phù hợp với yêu cầu (giống computed trong vue)
    getters: {
        friends: state => {
            return state.friends;
        }
    },
    //cập nhật giá trị
    mutations: {
        updateFriends(state, friend) {
            state.friends = friend
            console.log(friend);
        },

    },
    //cập nhật giá trị (trong trường hợp cần xử lý nhiều hơn, ví dụ call api, update giá trị ở các vuex khác,...)
    // actions: {
    //     addFriends(state) {
    //         // state.commit('updateFriends', friendInfo);

    //     }
    // }
}
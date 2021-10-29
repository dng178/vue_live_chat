export const friends = {
    namespaced: false,
    //lưu các biến
    state: {
        friends: {},
        message: [],
        friendList: [{
                conversationId: 1,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "tomato",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                        id: 7,
                        message: "This is a message from tomato",
                        time: new Date("10/22/2021")
                    }, {
                        id: 0,
                        message: "thanks tomato",
                        time: new Date("10/25/2021")
                    },
                    {
                        id: 7,
                        message: "Đi ăn bún đê",
                        time: new Date("10/28/2021")
                    }, {
                        id: 0,
                        message: "Chịu rồi bạn êii",
                        time: new Date("10/26/2021")
                    },
                ],
            },
            {
                conversationId: 2,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "apple",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                    id: 1,
                    message: "This is a message from apple",
                    time: new Date("10/22/2021")
                }, {
                    id: 0,
                    message: "thanks apple",
                    time: new Date("10/23/2021")
                }],
            },
            {
                conversationId: 3,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "orange",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                    id: 2,
                    message: "This is a message from orange",
                    time: new Date("10/26/2021")
                }, {
                    id: 0,
                    message: "thanks orange",
                    time: new Date("10/27/2021")
                }],
            },
            {
                conversationId: 4,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "pineapple",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                    id: 3,
                    message: "This is a message from pineapple",
                    time: new Date("10/26/2021")
                }, {
                    id: 0,
                    message: "thanks pineapple",
                    time: new Date("10/27/2021")
                }],
            },
            {
                conversationId: 5,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "berry",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                    id: 4,
                    message: "This is a message from berry",
                    time: new Date("10/22/2021")
                }, {
                    id: 0,
                    message: "thanks berry",
                    time: new Date("10/25/2021")
                }],
            },
            {
                conversationId: 6,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "blueberry",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                    id: 5,
                    message: "This is a message from blueberry",
                    time: new Date("10/21/2021")
                }, {
                    id: 0,
                    message: "thanks blueberry",
                    time: new Date("10/24/2021")
                }],
            },
            {
                conversationId: 7,
                userName: "user123",
                userImage: require('../assets/image/SKR.jpg'),
                friendName: "banana",
                friendImage: require('../assets/image/think.png'),
                listMessage: [{
                    id: 6,
                    message: "This is a message from banana",
                    time: new Date("10/25/2021")
                }, {
                    id: 0,
                    message: "thanks banana",
                    time: new Date("10/26/2021")
                }],
            },
        ],
    },
    //lấy thông tin biến, có thể custom giá trị để phù hợp với yêu cầu (giống computed trong vue)
    getters: {
        friends: state => {
            return state.friends;
        },
        message: state => {
            return state.friends.listMessage;
        }
    },
    //cập nhật giá trị
    mutations: {
        updateFriends(state, friend) {
            state.friends = friend
        },

        updateMessage(state, message) {
            let myMess = {}
            myMess.id = 0;
            myMess.message = message;
            myMess.time = Date.now();
            // console.log(myMess);
            state.friends.listMessage.push(myMess)
        }
    },

}
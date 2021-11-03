<template>
    <div id="friend-list">
    
        <div class="conversation-list" v-for="(item, index) in friendListSort" :key="index">
    
            <div class="conversation" :key="item.conversationId" :class="{ active:  index == activeItem  ?  index == activeItem : 0}" @click="
    
              clickHandler(index);
    
              addNew(item.conversationId);
    
              clearInput();
    
              persist(index, item.conversationId);
    
            ">
    
                <div class="avatar">
    
                    <svg class="c-avatar-status" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    
                <circle cx="6" cy="6" r="5.5" fill="#46D362" stroke="white" />
    
              </svg>
    
    
    
                    <img v-bind:src="item.friendImage" />
    
                </div>
    
    
    
                <div class="title-text">
    
                    {{ item.friendName }}
    
                </div>
    
    
    
                <div class="created-date">
    
                    {{ item.listMessage[item.listMessage.length - 1].time | moment("D/MM/YYYY") }}
    
                </div>
    
    
    
                <div>
    
                    <div v-if="
    
                  checkImage(item.listMessage[item.listMessage.length - 1].message)
    
                " class="message">
    
                        <div>{{ item.userName }} : has sent an image</div>
    
                    </div>
    
    
    
                    <div v-else-if="
    
                  checkType(item.listMessage[item.listMessage.length - 1].message)
    
                " class="message">
    
                        <div>{{ item.userName }} : has sent a file</div>
    
                    </div>
    
    
    
                    <div v-else class="message">
    
                        {{ item.listMessage[item.listMessage.length - 1].message }}
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>
<script>
import { mapGetters } from "vuex";
// import EventBus from './EventBus'
export default {
    data() {
        return {
            friendList: [{
                    conversationId: 1,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "tomato",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 7,
                            message: "This is a message from tomato",
                            time: new Date("10/22/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks tomato",
                            time: new Date("10/25/2021"),
                        },
                        {
                            id: 7,
                            message: "Đi ăn bún đê",
                            time: new Date("10/28/2021"),
                        },
                        {
                            id: 0,
                            message: "Chịu rồi bạn êii",
                            time: new Date("10/26/2021"),
                        },
                    ],
                },
                {
                    conversationId: 2,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "apple",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 1,
                            message: "This is a message from apple",
                            time: new Date("10/22/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks apple",
                            time: new Date("10/23/2021"),
                        },
                    ],
                },
                {
                    conversationId: 3,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "orange",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 2,
                            message: "This is a message from orange",
                            time: new Date("10/26/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks orange",
                            time: new Date("10/27/2021"),
                        },
                    ],
                },
                {
                    conversationId: 4,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "pineapple",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 3,
                            message: "This is a message from pineapple",
                            time: new Date("10/26/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks pineapple",
                            time: new Date("10/27/2021"),
                        },
                    ],
                },
                {
                    conversationId: 5,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "berry",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 4,
                            message: "This is a message from berry",
                            time: new Date("10/22/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks berry",
                            time: new Date("10/25/2021"),
                        },
                    ],
                },
                {
                    conversationId: 6,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "blueberry",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 5,
                            message: "This is a message from blueberry",
                            time: new Date("10/21/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks blueberry",
                            time: new Date("10/24/2021"),
                        },
                    ],
                },
                {
                    conversationId: 7,
                    userName: "user123",
                    userImage: require("../assets/image/SKR.jpg"),
                    friendName: "banana",
                    friendImage: require("../assets/image/think.png"),
                    listMessage: [{
                            id: 6,
                            message: "This is a message from banana",
                            time: new Date("10/25/2021"),
                        },
                        {
                            id: 0,
                            message: "thanks banana",
                            time: new Date("10/26/2021"),
                        },
                    ],
                },
            ],
            activeItem: "",
            temp: [],
            getId: "",
            urlParams: new URLSearchParams(window.location.search),
        };
    },
    computed: {
        ...mapGetters(["user", "friends"]),

        friendListSort() {
            let list = [].concat(this.friendList);
            return this.sortDate(list)
        },
    },
    
    created() {
        this.$store.commit(
              "updateFriends",
              this.friendList.find((x) => x.conversationId == this.getLink())
          );
    },
    mounted() {
        if (localStorage.activeItem) this.activeItem = localStorage.activeItem;
        if (localStorage.getId) this.getId = localStorage.getId;
    },
    methods: {
      //set active in frined list
        clickHandler(idx) {
            this.activeItem = idx;
        },

        //commit conversation in friendList to vuex and also push the router to Main/id
        addNew(ID) {
            this.getId = ID;
            this.$router.push({ path: '/Main', name: 'Main', params: { id: this.getId } })
            this.$store.commit(
                "updateFriends",
                this.friendList.find((x) => x.conversationId == ID)
            );
            this.scrollToEnd();
        },

      //Get last id in link so when reload cant get the id to run on created
        getLink() {
            let id = this.friendListSort[0].conversationId;
            console.log(id);
            var url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            if (url == null) {
                return url = id
            } else {
                return url
            }
        },

      //save to local storage
        persist(index, getId) {
            localStorage.activeItem = index;
            localStorage.getId = getId;
        },

        //not use
        update() {
            this.temp = this.friendList.find((x) => x.conversationId == this.getId);
            let item = this.friendList.indexOf(this.temp);
            this.friendList.unshift(this.temp);
            this.friendList.splice(item + 1, 1);
            this.activeItem = 0;
            // this.$bus.emit('update')
        },


        checkImage(url) {
            const rg = new RegExp(
                /^(blob):(http(s?):)([/|.|\w|\s|-])*(:[\w]+)([\w]+).*(\w+)/
            );
            if (rg.exec(url)) {
                return true;
            } else {
                return false;
            }
        },
        checkType(a) {
            if (typeof a === "object") {
                return true;
            } else {
                return false;
            }
        },
        clearInput() {
            return (document.getElementById("input-text").value = "");
        },
        scrollToEnd() {
            var container = document.getElementById("chat-message-list");
            this.$nextTick(() => {
                if (container) {
                    container.scrollTop = container.scrollHeight;
                }
            });
        },
        sortDate(arr) {
            this.activeItem = 0;
            return arr.sort((a, b) => b.listMessage[b.listMessage.length - 1].time - a.listMessage[a.listMessage.length - 1].time);
        },
    },

};
</script>

<style lang="scss" scoped>
@import "../assets/sass/friend_list.scss";
</style>

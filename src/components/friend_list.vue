<template>
    <div id="friend-list">
                <div class="conversation-list" v-for="(item, index) in friendList" :key="index" >
                
                    <div class="conversation" :key="item.id"
                        :class="{active: index === activeItem  }"
                        @click="clickHandler(index); addNew(item.id)">
                        <div class="avatar">
                            <svg class='c-avatar-status' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" fill="#46D362" stroke="white"/>
                        </svg>
                            <img v-bind:src="item.friendImage" />
                        </div>
                        <div class="title-text">
                           {{ item.friendName }}
                        </div>
                        <div class="created-date">
                            {{ item.friendCreatedDate }}
                        </div>
                        <div class="message">
                            {{ item.friendMessage }}
                        </div>
                    </div>
                </div>
                
            </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    data() {
    return {
      friendList: [
        { 
            id :0,
            friendName: 'apple', 
            friendMessage: 'This is a message from apple',
            friendCreatedDate: 'Aug 26 2021',
            friendImage: require('../assets/image/think.png'),
            class: 'active',
            userName: 'user123', 
            userMessage: 'thanks apple',
            userCreatedDate: 'Aug 27 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },
        { 
            id: 1,
            friendName: 'orange', 
            friendMessage: 'This is a message from orange',
            friendCreatedDate: 'Aug 27 2021',
            friendImage: require('../assets/image/think.png'),
            class: '',
            userName: 'user123', 
            userMessage: 'thanks orange',
            userCreatedDate: 'Aug 28 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },
        { 
            id: 2,
            friendName: 'pineapple', 
            friendMessage: 'This is a message from pineapple',
            friendCreatedDate: 'Aug 28 2021',
            friendImage: require('../assets/image/think.png'),
            class: '',
            userName: 'user123', 
            userMessage: 'thanks pineapple',
            userCreatedDate: 'Aug 29 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },
        { 
            id: 3,
            friendName: 'berry', 
            friendMessage: 'This is a message from berry',
            friendCreatedDate: 'Aug 29 2021',
            friendImage: require('../assets/image/think.png'),
            class: '',
            userName: 'user123', 
            userMessage: 'thanks berry',
            userCreatedDate: 'Aug 30 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },
        { 
            id: 4,
            friendName: 'blueberry', 
            friendMessage: 'This is a message from blueberry',
            friendCreatedDate: 'Aug 30 2021',
            friendImage: require('../assets/image/think.png'),
            class: '',
            userName: 'user123', 
            userMessage: 'thanks blueberry',
            userCreatedDate: '1 Sep 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },
        { 
            id: 5,
            friendName: 'banana', 
            friendMessage: 'This is a message from banana',
            friendCreatedDate: 'Aug 28 2021',
            friendImage: require('../assets/image/think.png'),
            class: '',
            userName: 'user123', 
            userMessage: 'thanks banana',
            userCreatedDate: '2 Sep 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },
        { 
            id: 6,
            friendName: 'tomato', 
            friendMessage: 'This is a message from tomato',
            friendCreatedDate: 'Sep 1 2021',
            friendImage: require('../assets/image/think.png'),
            class: '',
            userName: 'user123', 
            userMessage: 'thanks tomato',
            userCreatedDate: '2 Sep 2021',
            userImage: require('../assets/image/SKR.jpg'),
        },],
    // previous_active_id: 1,
    activeItem: 0,
    }
  },
  computed: {
            ...mapGetters([
                'user',
                'friends'
            ]),
        },
  methods: {
        clickHandler(idx) {
            this.activeItem = idx
        },
        addNew(ID){
            this.$store.commit('updateFriends', this.friendList.find(x => x.id == ID))
        },
        
    },
    
}
</script>


<style lang="scss" scoped>
    @import '../assets/sass/friend_list.scss';
</style>
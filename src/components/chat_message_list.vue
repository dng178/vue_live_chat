<template>
    <div id="chat-message-list">

                <div class="message-row your-message">
                    <div class="username">
                        {{friends.userName ? friends.userName : ''}}
                    </div>
                    <div class="message-content">
                        <div class="message-text">
                             {{friends.userMessage ? friends.userMessage : ''}}
                            <div class="message-time">{{friends.userCreatedDate ? friends.userCreatedDate : ''}}</div>
                        </div>
                        <img v-bind:src="friends.userImage" />
                    </div>
                </div>
                <div class="message-row other-message">
                    <div class="username">
                        {{friends.friendName ? friends.friendName : ''}}
                    </div>
                    <div class="message-content">
                        <img v-bind:src="friends.friendImage" />
                        <div class="message-text">

                            {{friends.friendMessage ? friends.friendMessage : ''}}
                            <div class="message-time">{{friends.friendCreatedDate ? friends.friendCreatedDate : ''}}</div>
                        </div>

                    </div>
                </div>
                <div class="message-row time-stamp">
                    <div class="time-stamp-text">25/08/2021</div>
                </div>

            </div>
</template>

<script>
import {mapGetters} from "vuex";

export default ({
    computed:{
            ...mapGetters([
                'user',
                'friends'
            ]),
        
    },
    methods:{
        valueMessage() {
        console.log(this.friends);  
    }
    }
})
</script>

<style scoped>
    @import '../assets/sass/chat_message_list.scss';
</style>
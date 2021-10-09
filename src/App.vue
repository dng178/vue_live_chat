
<template>
    <div class="chat-container" @click="clickOut">
        <div class="left-container">
            <StatusContainer />
            <FriendList />
            <Option />
        </div>
        <div class="middle-container">
            <ChatTitle />
            <ChatMessageList />
            <ChatForm />
        </div>
        <div class="right-container">
          <div class="info-container">
            <ContactInfo />
            <MediaContainer />
            <InfoOptionContainer />
            </div>
        </div>
    </div>

</template>


<script>
import ChatForm from "./components/chat_form.vue";
import ChatMessageList from "./components/chat_message_list.vue";
import ChatTitle from "./components/chat_title.vue";
import ContactInfo from "./components/contact_info.vue";
import FriendList from "./components/friend_list.vue";
import InfoOptionContainer from "./components/info_option_container.vue";
import MediaContainer from "./components/media_container.vue";
import Option from "./components/option.vue";
import StatusContainer from "./components/status_container.vue";

export default {
  name: "App",
  components: {
    ChatForm,
    ChatMessageList,
    ChatTitle,
    ContactInfo,
    FriendList,
    InfoOptionContainer,
    MediaContainer,
    Option,
    StatusContainer
  },
  methods:{
    clickOut:  function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }
    }
  }
};
</script>

<style>
 
 @import './assets/sass/main.scss';
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
 
#app {
  
}
</style>

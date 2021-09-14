
<template>
    <div class="chat-container">
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
// import HelloWorld from "./components/HelloWorld.vue";
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
  
};
</script>

<style lang="sass">
 @import "./src/assets/sass/main.sass"
 
#app 
  font-family: 'Poppins', 'Roboto', sans-serif
</style>

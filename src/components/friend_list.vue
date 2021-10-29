<template>
  <div id="friend-list">
    <div class="conversation-list" v-for="(item, index) in friendList" :key="index">
      <div
        class="conversation"
        :key="item.conversationId"
        :class="{ active: index === activeItem }"
        @click="
          clickHandler(index);
          addNew(item.conversationId);
          clearInput();
        "
      >
        <div class="avatar">
          <svg
            class="c-avatar-status"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="5.5" fill="#46D362" stroke="white" />
          </svg>

          <img v-bind:src="item.friendImage" />
        </div>

        <div class="title-text">
          {{ item.friendName }}
        </div>

        <div class="created-date">
          {{
            item.listMessage[item.listMessage.length - 1].time
              | moment("D/MM/YYYY")
          }}
        </div>

        <div @change="update(item.conversationId)">
          <div
            v-if="
              checkImage(item.listMessage[item.listMessage.length - 1].message)
            "
            class="message"
          >
            <div>{{ item.userName }} : has sent an image</div>
          </div>

          <div
            v-else-if="
              checkType(item.listMessage[item.listMessage.length - 1].message)
            "
            class="message"
          >
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
      friendList: [
        {
          conversationId: 1,
          userName: "user123",
          userImage: require("../assets/image/SKR.jpg"),
          friendName: "tomato",
          friendImage: require("../assets/image/think.png"),
          listMessage: [
            {
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
          listMessage: [
            {
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
          listMessage: [
            {
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
          listMessage: [
            {
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
          listMessage: [
            {
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
          listMessage: [
            {
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
          listMessage: [
            {
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
      activeItem: 0,
      temp: [],
      getId: "",
    };
  },
  // watch: {
  //   friendList: {
  //     deep: true,
  //     handler() {
  //       this.update();
  //       console.log("ggg");
  //     },
  //   },
  // },
  computed: {
    ...mapGetters(["user", "friends"]),
  },
  created() {
    this.addNew(1);
    
  },
  methods: {
    clickHandler(idx) {
      this.activeItem = idx;
    },
    addNew(ID) {
      this.getId = ID;
      this.$store.commit(
        "updateFriends",
        this.friendList.find((x) => x.conversationId == ID)
      );
      this.scrollToEnd();
    },

    //not use yet
    update() {
      this.temp = this.friendList.find((x) => x.conversationId == this.getId);
      let item = this.friendList.indexOf(this.temp);
      this.friendList.unshift(this.temp);
      this.friendList.splice(item + 1, 1);
      this.activeItem = 0;
      // this.$bus.emit('update')
    },

    

    remove(item) {
      this.friendList.splice(item, 1);
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/friend_list.scss";
</style>

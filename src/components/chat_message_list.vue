<template>
    <div id="chat-message-list">
    
        <div class="message-row time-stamp">
    
            <div class="time-stamp-text">{{ friends.listMessage[friends.listMessage.length -1].time | moment("D/MM/YYYY")}}</div>
    
        </div>
    
        <div class="message" v-for="(item, index) in friends.listMessage" :key="index">
    
    
    
            <div v-if="item.id != 0" class="message-row other-message">
    
                <div class="username">
    
                    {{friends.friendName ? friends.friendName : ''}}
    
                </div>
    
                <div class="message-content">
    
                    <div class="avatar">
    
                        <img v-bind:src="friends.friendImage" />
    
                    </div>
    
    
    
                    <div class="message-text">
    
                        <div class="content"> {{ item.message }}</div>
    
                        <div class="message-time">{{ item.time | moment("h:mm")}}</div>
    
                    </div>
    
                </div>
    
            </div>
    
            <div v-else class="message-row your-message">
    
                <div class="username">
    
                    {{friends.userName ? friends.userName : ''}}
    
                </div>
    
                <div class="display-message">
    
    
    
                    <div v-if="checkImage(item.message)" class="message-content">
    
                        <div class="message-text">
    
                            <div class="sendImage">
    
                                <div class="viewImg">
    
                                    <img v-for="(img, i) in item.message" :key="i" :id="'img_'+ i" v-bind:src="img" @click="viewImg(index, i)" />
    
                                </div>
    
                                <div v-if="displayImg" id="myModal" class="modal" @click="closeImg">
    
                                    <!-- <span class="close" @click="closeImg">&times;</span> -->
    
                                    <img v-bind:src="link" class="modal-content">
    
                                </div>
    
                            </div>
    
                            <div v-if="!checkImage(item.message)" class="content"> {{ item.message }}</div>
    
                            <div class="message-time">
    
                                <div v-if="checkImage(item.message)" class="total-img">
    
                                    <p>{{item.message.length}} X </p>
    
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    
                                    <path d="M15.2997 2.69996H14.1477L13.8597 1.79998C13.673 1.2719 13.3267 0.814956 12.8687 0.492454C12.4108 0.169953 11.8639 -0.00213916 11.3038 2.00728e-05H6.69586C6.13027 0.00107819 5.57929 0.179731 5.12068 0.510764C4.66208 0.841797 4.31902 1.30849 4.13991 1.84498L3.85192 2.74496H2.69994C1.98387 2.74496 1.29713 3.02942 0.790795 3.53576C0.284458 4.0421 0 4.72884 0 5.44491V12.6448C0 13.3608 0.284458 14.0476 0.790795 14.5539C1.29713 15.0602 1.98387 15.3447 2.69994 15.3447H15.2997C16.0158 15.3447 16.7025 15.0602 17.2088 14.5539C17.7152 14.0476 17.9996 13.3608 17.9996 12.6448V5.44491C18.0056 5.08658 17.9402 4.73064 17.8072 4.39786C17.6742 4.06507 17.4762 3.7621 17.2249 3.5066C16.9736 3.2511 16.6739 3.04819 16.3434 2.9097C16.0129 2.77121 15.6581 2.69991 15.2997 2.69996ZM16.1997 12.5998C16.1997 12.8384 16.1048 13.0674 15.9361 13.2361C15.7673 13.4049 15.5384 13.4997 15.2997 13.4997H2.69994C2.46125 13.4997 2.23234 13.4049 2.06356 13.2361C1.89478 13.0674 1.79996 12.8384 1.79996 12.5998V5.39991C1.79996 5.16122 1.89478 4.9323 2.06356 4.76353C2.23234 4.59475 2.46125 4.49993 2.69994 4.49993H4.49991C4.69616 4.51017 4.89038 4.45589 5.05289 4.34539C5.2154 4.23488 5.33727 4.07422 5.39989 3.88794L5.88588 2.41197C5.94625 2.23321 6.06128 2.07796 6.2147 1.96814C6.36813 1.85832 6.55218 1.7995 6.74086 1.79998H11.3488C11.5374 1.7995 11.7215 1.85832 11.8749 1.96814C12.0283 2.07796 12.1434 2.23321 12.2037 2.41197L12.6897 3.88794C12.7475 4.05961 12.8557 4.20985 13.0002 4.31904C13.1447 4.42823 13.3188 4.49127 13.4997 4.49993H15.2997C15.5384 4.49993 15.7673 4.59475 15.9361 4.76353C16.1048 4.9323 16.1997 5.16122 16.1997 5.39991V12.5998ZM8.99981 4.49993C8.28782 4.49993 7.59181 4.71106 6.9998 5.10662C6.4078 5.50219 5.94638 6.06442 5.67392 6.72222C5.40145 7.38002 5.33015 8.10384 5.46906 8.80216C5.60796 9.50048 5.95082 10.1419 6.45428 10.6454C6.95774 11.1488 7.59918 11.4917 8.2975 11.6306C8.99582 11.7695 9.71964 11.6982 10.3774 11.4257C11.0352 11.1533 11.5975 10.6919 11.993 10.0999C12.3886 9.50786 12.5997 8.81185 12.5997 8.09985C12.5997 7.14509 12.2205 6.22944 11.5453 5.55432C10.8702 4.8792 9.95457 4.49993 8.99981 4.49993ZM8.99981 9.89981C8.64381 9.89981 8.29581 9.79425 7.99981 9.59647C7.7038 9.39868 7.4731 9.11757 7.33686 8.78867C7.20063 8.45977 7.16498 8.09785 7.23444 7.7487C7.30389 7.39954 7.47532 7.07882 7.72705 6.82709C7.97878 6.57536 8.2995 6.40393 8.64866 6.33447C8.99782 6.26502 9.35973 6.30067 9.68863 6.4369C10.0175 6.57314 10.2986 6.80384 10.4964 7.09985C10.6942 7.39585 10.7998 7.74385 10.7998 8.09985C10.7998 8.57723 10.6101 9.03506 10.2726 9.37262C9.93502 9.71017 9.47719 9.89981 8.99981 9.89981Z" fill="#6588DE"/>
    
                                    </svg>
    
                                </div>
    
                                <div class="time-text">
    
                                    {{ item.time | moment("h:mm")}}</div>
    
                            </div>
    
                        </div>
    
    
    
                    </div>
    
    
    
                    <div v-else-if="!checkType(item.message)">
    
                        <div class="message-content" v-for="(file, i) in item.message" :key="i">
    
                            <div class="message-text">
    
                                <div v-if="!checkType(item.message)" class="sendFile">
    
                                    <div class="downloadIcon"></div>
    
                                    <div class="fileIcon">
    
                                        <img src="../assets/image/file.png" />
    
                                    </div>
    
                                    <div class="content">
    
                                        <div class="fileName">{{ file.name }}</div>
    
                                        <div class="fileInfo">{{fileExtension(file.name)}} - {{bytesToSize(file.size)}}</div>
    
    
    
                                    </div>
    
                                </div>
    
                                <div v-if="checkType(item.message)" class="content">
    
                                    {{ item.message }}
    
                                </div>
    
                                <div class="message-time">
    
                                    <div class="time-text">
    
                                        {{ item.time | moment("h:mm")}}</div>
    
                                </div>
    
                            </div>
    
    
    
                        </div>
    
                    </div>
    
    
    
                    <div v-else>
    
                        <div class="message-content">
    
                            <div class="message-text">
    
                                <div class="content">
    
                                    {{ item.message }}
    
                                </div>
    
                                <div class="message-time">
    
                                    <div class="time-text">
    
                                        {{ item.time | moment("h:mm")}}</div>
    
                                </div>
    
                            </div>
    
    
    
                        </div>
    
                    </div>
    
                    <div class="avatar">
    
                        <img v-bind:src="friends.userImage" />
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    
    
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default ({
    data() {
        return {
            checkImg: false,
            displayImg: false,
            link: '',

        }
    },
    computed: {
        ...mapGetters([
            'user',
            'friends'
        ]),

    },
    created() {
        this.scrollToEnd();
    },
    methods: {
        checkType(a) {
            if (typeof(a) === "object") {
                return false
            } else {
                return true;
            }
        },
        recentDate() {
            return this.friends.listMessage.map(x => x.time).sort((a, b) => b.date - a.date);
        },
        checkImage(url) {
            const rg = new RegExp(/^(blob):(http(s?):)([/|.|\w|\s|-])*(:[\w]+)([\w]+).*(\w+)/)
            if (rg.exec(url)) {
                return true
            } else {
                return false
            }
        },
        checkFile(name) {
            var rg = new RegExp(/([a-zA-Z0-9\s_\\.\-\\):])+(.doc|.docx|.pdf|.txt|.pptx|.xls|.xlsx)$/);
            if (rg.exec(name)) {
                return true;
            } else {
                return false;
            }
        },
        viewImg(index, i) {
            this.displayImg = true;
            this.link = this.friends.listMessage[index].message[i];
        },
        closeImg() {
            this.displayImg = false;
        },
        bytesToSize(bytes) {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
            if (bytes === 0) return 'n/a'
            const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
            if (i === 0) return `${bytes} ${sizes[i]})`
            return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
        },
        fileExtension(type) {
            return type.split('.').pop().toUpperCase();
        },
        scrollToEnd() {
            var container = document.getElementById("chat-message-list");
            this.$nextTick(() => {
                if (container) {
                    container.scrollTop = container.scrollHeight;
                }
            });
        },
    }
})
</script>

<style lang="scss" scoped>
@import '../assets/sass/chat_message_list.scss';
</style>
<template>
    <div id="chat-form">
        <div class="chat-menu">
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(-90 2.5 2.5)" fill="#6588DE"/>
                        </svg>
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(-90 2.5 2.5)" fill="#6588DE"/>
                        </svg>
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(-90 2.5 2.5)" fill="#6588DE"/>
                        </svg>
        </div>
        <div class="text-box">
            <div class="input">
                <div class="icon">
                    <div class="upload_file">
                    <svg @click="popup" class="attachment_icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5461 10.585L9.25481 16.8865C8.43003 17.6195 7.35637 18.0096 6.25343 17.9772C5.1505 17.9447 4.10164 17.4921 3.32141 16.7118C2.54118 15.9316 2.08854 14.8827 2.05607 13.7798C2.0236 12.6769 2.41376 11.6032 3.14675 10.7784L11.2908 2.63436C11.7771 2.17248 12.4221 1.91496 13.0927 1.91496C13.7633 1.91496 14.4084 2.17248 14.8946 2.63436C15.3683 3.11444 15.6339 3.76177 15.6339 4.43623C15.6339 5.1107 15.3683 5.75803 14.8946 6.23811L7.87031 13.2522C7.8008 13.3271 7.71721 13.3875 7.62434 13.4301C7.53146 13.4726 7.43112 13.4965 7.32902 13.5003C7.22693 13.504 7.12509 13.4877 7.02932 13.4521C6.93355 13.4165 6.84573 13.3624 6.77086 13.2929C6.696 13.2234 6.63556 13.1398 6.593 13.0469C6.55043 12.9541 6.52658 12.8537 6.5228 12.7516C6.51902 12.6495 6.53538 12.5477 6.57096 12.4519C6.60653 12.3562 6.66063 12.2683 6.73014 12.1935L11.9525 6.98126C12.1442 6.78956 12.2519 6.52957 12.2519 6.25847C12.2519 5.98737 12.1442 5.72738 11.9525 5.53568C11.7608 5.34399 11.5008 5.2363 11.2297 5.2363C10.9586 5.2363 10.6987 5.34399 10.507 5.53568L5.28457 10.7683C5.02325 11.0275 4.81584 11.336 4.6743 11.6758C4.53276 12.0157 4.45989 12.3802 4.45989 12.7483C4.45989 13.1164 4.53276 13.4809 4.6743 13.8207C4.81584 14.1606 5.02325 14.469 5.28457 14.7283C5.81839 15.2368 6.52736 15.5204 7.2646 15.5204C8.00183 15.5204 8.71081 15.2368 9.24463 14.7283L16.2587 7.70405C17.0679 6.83563 17.5084 5.68703 17.4875 4.50023C17.4666 3.31343 16.9858 2.18108 16.1465 1.34176C15.3071 0.502431 14.1748 0.0216535 12.988 0.000713708C11.8012 -0.020226 10.6526 0.420307 9.78417 1.2295L1.64009 9.37358C0.541863 10.5899 -0.0446844 12.1831 0.00265827 13.8212C0.0500009 15.4593 0.727583 17.016 1.89423 18.1669C3.06087 19.3178 4.62661 19.9742 6.2652 19.9993C7.9038 20.0243 9.48888 19.4162 10.6902 18.3015L16.9917 12.0102C17.0866 11.9153 17.1619 11.8026 17.2133 11.6786C17.2646 11.5546 17.2911 11.4217 17.2911 11.2874C17.2911 11.1532 17.2646 11.0203 17.2133 10.8963C17.1619 10.7723 17.0866 10.6596 16.9917 10.5647C16.8968 10.4697 16.7841 10.3944 16.6601 10.3431C16.536 10.2917 16.4031 10.2653 16.2689 10.2653C16.1347 10.2653 16.0017 10.2917 15.8777 10.3431C15.7537 10.3944 15.641 10.4697 15.5461 10.5647V10.585Z" fill="#6588DE"/>
                    </svg>
                    <div class="popup-text" id="myPopup" v-if="checkPopup" >
                    <div class="close" @click="clickOutside"></div>
                        <div class="file-list">
                            <div class="file-content">
                            <div v-for="(file, index) in filelist" :key="index">
                                <div class="preview">
                                    <img class="file-image" :id="'file-image_' + index" v-if="file.url" :src="file.url" :title="file.name"/>    
                                    <img class="default-icon" :id="'default-icon_'+ index" src="../assets/image/file.png" alt="default" />
                                    <div class="remove" type="button" @click="remove(filelist.indexOf(file))" title="Remove file"></div>    
                                    <div class="file-name" :id="'name_'+index" :title="file.name">{{file.name}}</div>
                                    <div class="loading" :id="'load_'+ index">
                                        <div class="bar-backgroud">
                                            <div :id="'myBar_' + index" class="bar">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label for="upload" class="drop-area" @dragover="dragover" @drop="drop">
                            <input type="file" id="upload" multiple hidden  @change="uploadFile(); move()" ref="file" accept=".gif, .png, .jpg, .jpeg, .xlsx, .xls, .pptx, .pdf, .docx, .doc, .txt" />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24 10.4241 23.6896 8.8637 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40041 18.0481 1.5165 16.5922 0.913445C15.1363 0.310389 13.5759 0 12 0ZM12 21.6C10.1013 21.6 8.24524 21.037 6.66653 19.9821C5.08782 18.9272 3.85736 17.4279 3.13076 15.6738C2.40416 13.9196 2.21405 11.9893 2.58447 10.1271C2.95488 8.26491 3.8692 6.55436 5.21178 5.21177C6.55436 3.86919 8.26492 2.95488 10.1271 2.58446C11.9894 2.21404 13.9196 2.40415 15.6738 3.13076C17.4279 3.85736 18.9272 5.08781 19.9821 6.66652C21.037 8.24524 21.6 10.1013 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6ZM16.8 10.8H13.2V7.2C13.2 6.88174 13.0736 6.57651 12.8485 6.35147C12.6235 6.12643 12.3183 6 12 6C11.6817 6 11.3765 6.12643 11.1515 6.35147C10.9264 6.57651 10.8 6.88174 10.8 7.2V10.8H7.2C6.88174 10.8 6.57652 10.9264 6.35148 11.1515C6.12643 11.3765 6 11.6817 6 12C6 12.3183 6.12643 12.6235 6.35148 12.8485C6.57652 13.0736 6.88174 13.2 7.2 13.2H10.8V16.8C10.8 17.1183 10.9264 17.4235 11.1515 17.6485C11.3765 17.8736 11.6817 18 12 18C12.3183 18 12.6235 17.8736 12.8485 17.6485C13.0736 17.4235 13.2 17.1183 13.2 16.8V13.2H16.8C17.1183 13.2 17.4235 13.0736 17.6485 12.8485C17.8736 12.6235 18 12.3183 18 12C18 11.6817 17.8736 11.3765 17.6485 11.1515C17.4235 10.9264 17.1183 10.8 16.8 10.8Z" fill="#F9FBFB"/>
                                </svg>
                                <p>Add Files</p>
                        </label>
                    </div>
                    <div class="triangle"></div>   
                </div>  
            </div>
                </div>
                <div class="icon">
                    <svg class="micro_icon" width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M7.27273 12.7273C8.23715 12.7273 9.16207 12.3442 9.84402 11.6622C10.526 10.9803 10.9091 10.0553 10.9091 9.09091V3.63636C10.9091 2.67194 10.526 1.74702 9.84402 1.06507C9.16207 0.383116 8.23715 0 7.27273 0C6.3083 0 5.38338 0.383116 4.70143 1.06507C4.01948 1.74702 3.63636 2.67194 3.63636 3.63636V9.09091C3.63636 10.0553 4.01948 10.9803 4.70143 11.6622C5.38338 12.3442 6.3083 12.7273 7.27273 12.7273ZM5.45455 3.63636C5.45455 3.15415 5.6461 2.69169 5.98708 2.35071C6.32805 2.00974 6.79052 1.81818 7.27273 1.81818C7.75494 1.81818 8.2174 2.00974 8.55838 2.35071C8.89935 2.69169 9.09091 3.15415 9.09091 3.63636V9.09091C9.09091 9.57312 8.89935 10.0356 8.55838 10.3766C8.2174 10.7175 7.75494 10.9091 7.27273 10.9091C6.79052 10.9091 6.32805 10.7175 5.98708 10.3766C5.6461 10.0356 5.45455 9.57312 5.45455 9.09091V3.63636ZM14.5455 9.09091C14.5455 8.8498 14.4497 8.61857 14.2792 8.44808C14.1087 8.2776 13.8775 8.18182 13.6364 8.18182C13.3953 8.18182 13.164 8.2776 12.9935 8.44808C12.8231 8.61857 12.7273 8.8498 12.7273 9.09091C12.7273 10.5375 12.1526 11.9249 11.1297 12.9479C10.1067 13.9708 8.71936 14.5455 7.27273 14.5455C5.82609 14.5455 4.43871 13.9708 3.41578 12.9479C2.39286 11.9249 1.81818 10.5375 1.81818 9.09091C1.81818 8.8498 1.7224 8.61857 1.55192 8.44808C1.38143 8.2776 1.1502 8.18182 0.909091 8.18182C0.667985 8.18182 0.436754 8.2776 0.266267 8.44808C0.0957791 8.61857 0 8.8498 0 9.09091C0.00160527 10.8612 0.648838 12.5701 1.82036 13.8972C2.99188 15.2244 4.60725 16.0787 6.36364 16.3V18.1818H4.54545C4.30435 18.1818 4.07312 18.2776 3.90263 18.4481C3.73214 18.6186 3.63636 18.8498 3.63636 19.0909C3.63636 19.332 3.73214 19.5632 3.90263 19.7337C4.07312 19.9042 4.30435 20 4.54545 20H10C10.2411 20 10.4723 19.9042 10.6428 19.7337C10.8133 19.5632 10.9091 19.332 10.9091 19.0909C10.9091 18.8498 10.8133 18.6186 10.6428 18.4481C10.4723 18.2776 10.2411 18.1818 10 18.1818H8.18182V16.3C9.9382 16.0787 11.5536 15.2244 12.7251 13.8972C13.8966 12.5701 14.5438 10.8612 14.5455 9.09091Z" fill="#6588DE"/>
                        </svg>
                </div>
                <input type="text" placeholder="Type a new message..." id="input-text" v-model="inputText" @keyup.enter="sendContent"/>
                <button class="send" type="submit" @click="sendContent" >Send
                        <svg class="send-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3393 7.31637L4.33927 0.314359C3.78676 0.0392893 3.16289 -0.0586374 2.55271 0.0339303C1.94252 0.126498 1.37573 0.405055 0.929602 0.831623C0.483474 1.25819 0.179724 1.81201 0.0597636 2.41757C-0.0601964 3.02313 0.00947219 3.65097 0.259271 4.21548L2.65927 9.58702C2.71373 9.71689 2.74177 9.85631 2.74177 9.99714C2.74177 10.138 2.71373 10.2774 2.65927 10.4073L0.259271 15.7788C0.055971 16.2356 -0.0299735 16.7361 0.00924794 17.2346C0.0484693 17.7331 0.211613 18.2139 0.483853 18.6333C0.756092 19.0527 1.1288 19.3974 1.56809 19.6361C2.00739 19.8748 2.49935 19.9999 2.99927 20C3.4675 19.9953 3.92876 19.886 4.34927 19.6799L18.3493 12.6779C18.8459 12.428 19.2633 12.045 19.555 11.5717C19.8466 11.0983 20.0011 10.5532 20.0011 9.99714C20.0011 9.44108 19.8466 8.89597 19.555 8.4226C19.2633 7.94924 18.8459 7.56625 18.3493 7.31637H18.3393ZM17.4493 10.8874L3.44927 17.8894C3.26543 17.9777 3.059 18.0077 2.85766 17.9753C2.65631 17.9429 2.46968 17.8497 2.32278 17.7082C2.17589 17.5667 2.07575 17.3837 2.0358 17.1836C1.99585 16.9836 2.018 16.7761 2.09927 16.589L4.48927 11.2175C4.52021 11.1458 4.54692 11.0723 4.56927 10.9974H11.4593C11.7245 10.9974 11.9788 10.892 12.1664 10.7044C12.3539 10.5169 12.4593 10.2624 12.4593 9.99714C12.4593 9.73184 12.3539 9.47742 12.1664 9.28983C11.9788 9.10223 11.7245 8.99685 11.4593 8.99685H4.56927C4.54692 8.92199 4.52021 8.84851 4.48927 8.77678L2.09927 3.40524C2.018 3.21815 1.99585 3.01068 2.0358 2.81064C2.07575 2.61061 2.17589 2.42757 2.32278 2.28607C2.46968 2.14458 2.65631 2.05139 2.85766 2.019C3.059 1.98661 3.26543 2.01658 3.44927 2.10487L17.4493 9.10688C17.6131 9.19082 17.7505 9.31835 17.8465 9.47543C17.9425 9.63251 17.9933 9.81304 17.9933 9.99714C17.9933 10.1812 17.9425 10.3618 17.8465 10.5188C17.7505 10.6759 17.6131 10.8034 17.4493 10.8874Z" fill="#FDFDFE"/>
                        </svg>    
                    </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {mapGetters} from "vuex";
export default ({
    delimiters: ['${', '}'], // Avoid Twig conflicts
    data() {
        return {
            beforeLoad: [],
            filelist: [], // Store our uploaded files
            checkPopup: false,
            loading: 0,
            index: 0,
            inputText: '',
        }
    },
    computed:{
            ...mapGetters([
                'user',
                'friends'
            ]),
        
    },
    // watch:{
    //     inputText: function(){
            
    //         this.$store.commit('updateMessage', this.inputText)
    //     }
    // },
    methods: {

        popup: function() {
            if(this.filelist.length == 0){
                this.checkPopup = !this.checkPopup;
            }
            else if(confirm('Are you want to close? ') && this.filelist.length > 0){
                this.filelist = [];
                this.checkPopup = !this.checkPopup;
                this.index = 0
            }
            else{
                console.log('123');
                
            }
        },
        clickOutside() {
            if(this.filelist.length == 0){
                this.checkPopup = !this.checkPopup;
            }
            else if(confirm('Are you want to close? ') && this.filelist.length > 0){
                this.filelist = [];
                this.checkPopup = !this.checkPopup;
                this.index = 0
            }
            else{
                console.log('456');
            }
        },
        remove(e) {
            this.filelist.splice(e, 1);
            this.index--;
        },

        async uploadFile() {

            var arr = this.filelist;
            var file = this.$refs.file.files;
            var len = file.length;
            for (let i = 0; i < len; i++) {

                if (arr.map(x => x.name).includes(file[i].name)) {
                    alert(file[i].name + " is already been upload")

                } else {
                    var size = file[i].size
                    var fname = file[i].name.split('.').pop().toLowerCase();
                    if (size > 5120 * 5120) {
                        alert(file[i].name + " is too big (> 5MB)");
                    } else {
                        if (fname == "pdf" || fname == "txt" || fname == "doc" || fname == "docx" || fname == "pptx" || fname == "xls" || fname == "xlsx") {
                            arr.push(file[i])
                            file[i].url = '/files.png'
                            
                        } else if (fname == "gif" || fname == "png" || fname == "jpg" || fname == "jpeg") {
                            arr.push(file[i])
                            file[i].url = (URL.createObjectURL(file[i]));

                        } else {
                            alert(file[i].name + " is not valid");
                        }
                    }
                }
            }
        },

        dragFile(e) {
            this.filelist = e.dataTransfer.files;
        },

        dragover(event) {
            event.preventDefault();
        },

        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.uploadFile();
        },
        move() {
            
            let len = this.filelist.length
            let bar, loadingBar, fileName, defaultIcon, fileImage = null
            for (let i = this.index; i < len; i++) {
                setTimeout(() => {
                    this.index++
                    bar = document.getElementById('myBar_' + i);
                    loadingBar = document.getElementById("load_" + i);
                    fileName = document.getElementById("name_" + i);
                    defaultIcon = document.getElementById("file-image_" + i);
                    fileImage = document.getElementById("default-icon_" + i);
                    setInterval(load, 50);
                    var load = this.frame(bar, loadingBar, fileName, defaultIcon, fileImage)

                }, 50);
            }
           
            
        },
        frame(bar, load, name, image, defaultIcon) {
            let width = this.loading;
            for (let idx = 0; idx <= 100; idx++) {
                let k = idx;
                setTimeout(() => {
                    width++;
                    bar.style.width = width + '%';
                    if (width >= 100) {
                        // clearInterval(id);
                        load.style.display = "none";
                        name.style.display = "block"
                        image.style.display = "block";
                        defaultIcon.style.display = "none";
                    }
                }, 10 * (k + 1));
            }

        },
        sendContent(){
            var file = this.filelist
            var message = document.getElementById("input-text").value;
            if(message.trim().length == 0 && file.length == 0){
                alert("please input something");
                this.clearInput();
            }else if(file.lenght > 0 || message.trim().length == 0 ){
                let arr =[]
                for (var i = 0; i < file.length; i++)
                    {                    
                        if(this.checkFile(file[i].name)){
                            arr.push(file[i])      
                            console.log("aaaa");
                                         
                        }else{
                            arr.push(file[i].url)
                            console.log('bbb');
                            
                        }
                        
                    }
                this.$store.commit('updateMessage', arr)
                this.filelist = [];
                this.checkPopup = !this.checkPopup;
                this.index = 0;
                this.scrollToEnd();
                this.scrollToTop();
                this.clearInput();
                // this.$bus.on('update')
            }
            else{
                this.$store.commit('updateMessage', message.trim())
                this.scrollToEnd();
                this.clearInput();
                this.scrollToTop();
                // this.$bus.on('update')
            }
        },
        scrollToEnd() {    	
            var container =document.getElementById("chat-message-list");
            this.$nextTick(() => {
                    if (container) {
                        container.scrollTop = container.scrollHeight;
                    }
            });
        },
        clearInput(){
            return document.getElementById("input-text").value="";
        },
        download(link) {
            var element = document.createElement('a');
            element.setAttribute('href', link);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        },
        checkFile(name){
            var rg = new RegExp(/([a-zA-Z0-9\s_\\.\-\\):])+(.doc|.docx|.pdf|.txt|.pptx|.xls|.xlsx)$/);
            if(rg.exec(name)){
                return true;             
            }else{
                return false;
            }
        },
        scrollToTop() {
           var container =document.getElementById("friend-list");
            this.$nextTick(() => {
                    if (container) {
                        container.scrollTop = 0;
                    }
            });
        },
    },

})
</script>

<style lang="scss" scoped>
@import '../assets/sass/chat_form.scss';
</style>
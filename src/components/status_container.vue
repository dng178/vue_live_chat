<template>
    <div id="status-container">
                <div class="display-status">
                    <img src="../assets/image/think.png" alt="Friend-1" />
                    <div class="title-text">
                        Friend-1
                    </div>
                    <div class="menu">
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
                    <div id="dropdown">
                        <div class="dropbtn" @click="displayList">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#F3BA4A"/>
                            </svg>
                            <p>Working</p>
                            <svg class="down-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43413 5.43413L9.82036 1.06287C10.0599 0.808383 10.0599 0.419162 9.82036 0.179641C9.58084 -0.0598802 9.17665 -0.0598802 8.93713 0.179641L5 4.11677L1.06287 0.179641C0.808383 -0.0598802 0.419162 -0.0598802 0.179641 0.179641C-0.0598802 0.419162 -0.0598802 0.808383 0.179641 1.06287L4.5509 5.43413C4.80539 5.67365 5.19461 5.67365 5.43413 5.43413Z" fill="#F2F6F7"/>
                            </svg>
                    </div>
                        <div id="myDropdown" class="dropdown-content" v-if="checkList" v-click-outside="clickOutside">
                            <div class="select" alt="Online">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="8" rx="4" fill="#F3BA4A"/>
                                </svg>
                                <p>Online</p></div>
                            <div class="select" alt="Offline">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="8" rx="4" fill="#F3BA4A"/>
                                </svg>
                                <p>Offline</p>
                            </div>
                            <div class="select" alt="Working">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="8" rx="4" fill="#F3BA4A"/>
                                </svg>
                                <p>Working</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
</template>

<script>
export default {
    data() {
        return {
        checkList: false,
        }
    },
    methods: {
        displayList () {
           this.checkList = !this.checkList;
        },
        clickOutside(){
            this.checkList = false;
        },
  }
}
</script>


<style scoped>
    @import '../assets/sass/status_container.scss';
</style>

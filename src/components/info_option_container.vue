<template>
    <div class="info-option-container">
                    <div class="mute-option">
                        <p>Mute Notifications</p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="8.5" stroke="#6588DE"/>
                        </svg>
                    </div>
                    <div class="star-option">
                        <p>Starred Messages</p>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52096 5.47904L1.27545 0.215568C0.970059 -0.0718565 0.502993 -0.0718565 0.215568 0.215569C-0.0718568 0.502994 -0.0718568 0.988024 0.215568 1.27545L4.94012 6L0.215569 10.7246C-0.0718563 11.0299 -0.0718563 11.497 0.215569 11.7844C0.502994 12.0719 0.97006 12.0719 1.27545 11.7844L6.52096 6.53892C6.80838 6.23353 6.80838 5.76647 6.52096 5.47904Z" fill="#6588DE"/>
                        </svg>
                    </div>
                    <div class="block-button">
                        <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84286 14.1566 2 12.1217 2 10C1.9978 8.22334 2.59302 6.49755 3.69 5.1L14.9 16.31C13.5025 17.407 11.7767 18.0022 10 18ZM16.31 14.9L5.1 3.69C6.49755 2.59302 8.22335 1.99779 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C18.0022 11.7767 17.407 13.5025 16.31 14.9Z" fill="#6588DE"/>
                            </svg>                                
                            Block Contact   
                        </button>
                    </div>
                    <div class="delete-button">
                        <button type="submit">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 4H13V3C13 2.20435 12.6839 1.44129 12.1213 0.87868C11.5587 0.316071 10.7956 0 10 0H8C7.20435 0 6.44129 0.316071 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H2V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6H17C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4ZM7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H10C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V4H7V3ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V6H14V17Z" fill="#6588DE"/>
                            </svg>                                
                            Delete Chat   
                        </button>
                    </div>
                </div>
</template>
<style scoped>
    @import '../assets/sass/info_option_container.scss';
</style>
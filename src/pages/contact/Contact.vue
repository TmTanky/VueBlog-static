<template>
    <main>
        <h1> Contact Me </h1>

        <div class="contacticons">
            <div class="item" @click="toGithub" > <img src="https://img.icons8.com/material-outlined/50/000000/github.png"/> </div>
            <div class="item" @click="toTwitter" > <img src="https://img.icons8.com/material-rounded/50/000000/twitter-squared.png"/> </div>
            <div class="item" @click="toFb" > <img src="https://img.icons8.com/material-outlined/50/000000/facebook-f.png"/> </div>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        toFb() {
            window.open('https://www.facebook.com/', '_blank')
        },
        toTwitter() {
            window.open('https://twitter.com/', '_blank')
        },
        toGithub() {
            window.open('https://github.com/TmTanky', '_blank')
        }
    }
}
</script>

<style scoped>

main {
    display: flex;
    justify-content: center;
    min-height: 85vh; 
    flex-direction: column;
    align-items: center;
}

.contacticons {
    display: flex;
    padding-top: 1rem;
}

.item {
    margin: 0rem 0.2rem;
    cursor: pointer;
}

</style>
<template>
    <footer>
        <p> Copyright &copy; VueBlog {{ year }} </p>
    </footer>
</template>

<script>
const year = new Date().getFullYear()

export default {
    data() {
        return {
            year
        }
    }
}
</script>

<style scoped>

footer {
    padding: 0.8rem 0rem;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
}

</style>
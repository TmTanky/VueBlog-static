<template>
    <main>
        <header>
            <h1> Article # {{ selectedArticle.id }} </h1>
        </header>

        <div class="article">
            <h2> {{ selectedArticle.title }} </h2>
            <p> {{ selectedArticle.content }} </p>
        </div>
    </main>
</template>

<script>
export default {
    inject: [
        'allArticles'
    ],
    data() {
        return {
            selectedArticle: {}
        }
    },
    created() {
        const articleID = parseInt(this.$route.params.articleID)
        const foundArticle = this.allArticles.find(item => item.id === articleID)
        this.selectedArticle = foundArticle
    }
}
</script>\

<style scoped>

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 0rem 1rem;
}

h2 {
    margin-bottom: 1rem;
}

</style>
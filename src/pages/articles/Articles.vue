<template>
    <main>
        <h1> All Articles </h1>

        <div class="alllinks" v-for="article in allArticles" :key="article.id" >
            <router-link :to="{name: 'Article', params: { articleID: article.id }}" > {{ article.title }} </router-link>
        </div>
    </main>
</template>

<script>
export default {
    inject: [
        'allArticles'
    ]
}
</script>

<style scoped>

main {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
}

h1 {
    padding: 4rem 0rem;
    font-size: 2.5rem;
}

a {
    font-size: 1.5rem;
}

</style>
<template>
    <main>
        <div class="title">
            <h1> Welcome to VueBlog </h1>
        </div>

        <div class="articletitles">
            <div class="titlecard" v-for="article in allArticles" :key="article.id" >
                <p> <strong> Article # {{ article.id }} </strong> </p>
                <h1> {{ article.title }} </h1>
                <router-link :to="{name: 'Article', params: {articleID: article.id} }" > Read more. </router-link>
            </div>
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

main .title {
    display: flex;
    padding: 5rem 0rem;
    justify-content: center;
    text-align: center;
}

main .titlecard {
    padding: 1rem 2rem;
    background-color: whitesmoke;
    margin: 0.5rem;
}

main .titlecard p {
    padding-bottom: 1rem;
}

@media screen and (max-width: 450px) {

    main .title h1 {
        font-size: 10vw;
    }

    main .title {
    display: flex;
    padding: 3rem 0rem;
    justify-content: center;
    text-align: center;
}

    main .titlecard {
        padding: 1rem;
    }

    main .titlecard h1 {
        font-size: 8vw
    }

}

</style>
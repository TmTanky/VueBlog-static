<template>
    <main>
        <h1> About </h1> 
        <p> This is a simple VueBlog with vue router </p>
    </main>
</template>

<style scoped>

main {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 1rem;
}

h1 {
    font-size: 4rem;
}

p {
    font-size: 1.2rem;
}

@media screen and (max-width: 450px) {

    main {
        font-size: 10vw;
        text-align: center;
    }

    h1 {
       font-size: 14vw;
    }

}

</style>
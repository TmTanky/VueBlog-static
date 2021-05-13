<template>
    <nav>
        <div class="navlogo">
            <h2> VueBlog </h2>
        </div>

        <div class="navlinks">
            <router-link to="/" > Home </router-link>
            <router-link to="/articles" > Articles </router-link>
            <router-link to="/about" > About </router-link>
            <router-link to="/contact" > Contact </router-link>
        </div>
    </nav>
</template>

<style scoped>

nav {
    display: flex;
    background-color: black;
    padding: 1rem;
    color: white;
}

.navlogo, .navlinks {
    display: flex;
    flex: 1;
}

.navlinks {
    margin: auto;
    justify-content: flex-end;
}

a {
    margin: 0rem 0.3rem;
    text-decoration: none;
    color: white;
}

a:active,
a.router-link-active {
    border-bottom: white solid 1px;
}

@media screen and (max-width: 500px) {

    nav {
        flex-direction: column;
    }

    .navlogo {
        justify-content: center;
        padding-bottom: 0.5rem;
    }
}

</style>
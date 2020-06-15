<template>
    <div class="app-container">
        <sidebar />
        <main class="main-container">
            <header class="header-container">
                <navbar />
                <tags-view />
            </header>
            <app-main />
            <div class="right">右边</div>
        </main>
    </div>
</template>

<script>
import { AppMain, Navbar, Sidebar, TagsView } from "./components";

export default {
    components: {
        AppMain,
        Navbar,
        Sidebar,
        TagsView
    }
};
</script>

<style>
</style>
<template>
    <v-container>
        <job-card/>
    </v-container>
</template>

<script>
import jobCard from "~/components/dashboard/jobCard.vue";

export default {
    components: {
        jobCard
    },
    created() {
        this.$store.dispatch("route/route", "ダッシュボード");
    }
};
</script>

<style scoped>
</style>

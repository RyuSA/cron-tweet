<template>
    <v-app>
        <v-container>
            <job-card/>
        </v-container>
    </v-app>
</template>

<script>
import jobCard from "~/components/dashboard/jobCard.vue";

export default {
    components: {
        jobCard
    }
};
</script>

<style scoped>
.test {
    margin: 40px auto;
    width: 90%;
    padding: 20px;
}
</style>

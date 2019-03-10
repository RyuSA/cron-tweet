<template>
    <v-container>
        <job-form/>
    </v-container>
</template>

<script>
import jobForm from "~/components/job/jobForm.vue";

export default {
    components: {
        jobForm
    },
    created: function() {
        this.$store.dispatch("route/route", "新規作成");
        // 初期登録のため、データを初期化する
        this.$store.dispatch("job/reset_job_instance");
    }
};
</script>

<style scoped>
</style>

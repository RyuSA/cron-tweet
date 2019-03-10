<!-- 
呼び出し前に
編集するデータでjobストアを初期化
-->
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
    created() {
        this.$store.dispatch("route/route", "変更");
    }
};
</script>

<style scoped>
</style>

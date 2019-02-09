<template>
    <v-container>
        <job-form :job_data="job_data"/>
    </v-container>
</template>

<script>
import jobForm from "~/components/job/jobForm.vue";

export default {
    components: {
        jobForm
    },
    data() {
        return {
            // 初期データは空
            job_data: {
                name: null,
                type: null,
                schedule: {
                    type: null,
                    day: null
                },
                content: null,
                exec_time: null,
                is_active: false
            }
        };
    }
};
</script>

<style scoped>
</style>

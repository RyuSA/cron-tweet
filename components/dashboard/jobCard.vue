<template>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="job in jobs" :key="job.name">
            <div slot="header">{{ job.name }}</div>
            <v-card class="pa-4">
                <v-layout>
                    <v-chip outline color="accent">{{ job.schedule.type }}</v-chip>
                    <v-chip outline color="primary" v-if="job.is_active == true">runnning</v-chip>
                    <v-chip outline color="error" v-else>stop</v-chip>
                </v-layout>
                <v-list dense>
                    <v-list-tile v-if="job.schedule.type == 'weekly'">
                        <v-list-tile-content>曜日:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ job.schedule.day }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>実行時刻:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ job.exec_time }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>作成日:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ job.created_at }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>更新日時:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ job.updated_at }}</v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>
<script>
export default {
    data() {
        return {
            jobs: [
                {
                    name: "job1",
                    schedule: {
                        type: "weekly",
                        day: "Mon"
                    },
                    exec_time: "10:00",
                    updated_at: "2019-01-01 11:00:00",
                    created_at: "2019-01-01 10:00:00",
                    is_active: true
                },
                {
                    name: "job2",
                    schedule: {
                        type: "dayly"
                    },
                    exec_time: "10:00",
                    updated_at: "2018-01-01 12:34:56",
                    created_at: "2018-01-01 01:23:45",
                    is_active: true
                },
                {
                    name: "job3",
                    schedule: {
                        type: "once"
                    },
                    exec_time: "10:00",
                    updated_at: "2019-01-01 11:00:00",
                    created_at: "2019-01-01 10:00:00",
                    is_active: false
                }
            ]
        };
    }
};
</script>

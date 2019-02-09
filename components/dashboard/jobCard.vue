<template>
    <v-container>
        <v-sheet class="d-flex" color="grey lighten-3 mb-3" height="200"></v-sheet>
        <v-expansion-panel>
            <v-subheader>ジョブ一覧</v-subheader>
            <v-expansion-panel-content v-for="job in jobs" :key="job.name" class="pa-0">
                <div slot="header">{{ job.name }}</div>
                <v-card class="pa-4">
                    <div class="build">
                        <v-icon color="secondary">settings</v-icon>
                    </div>
                    <v-layout>
                        <v-chip outline color="accent">{{ job.schedule.type }}</v-chip>
                        <v-chip outline color="primary" v-if="job.is_active == true">runnning</v-chip>
                        <v-chip outline color="error" v-else>stop</v-chip>
                    </v-layout>
                    <v-list dense class="mb-5">
                        <v-list-tile v-if="job.schedule.type == 'weekly'">
                            <v-list-tile-content>曜日:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ job.schedule.day }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>実行時刻:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ job.exec_time }}</v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    <v-footer absolute color="white" class="px-3 caption">
                        <p class="mb-0 footer">最終更新 : {{ job.updated_at }}</p>
                    </v-footer>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    name: "毎週発火",
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
                    name: "毎日発火",
                    schedule: {
                        type: "dayly"
                    },
                    exec_time: "10:00",
                    updated_at: "2018-01-01 12:34:56",
                    created_at: "2018-01-01 01:23:45",
                    is_active: true
                },
                {
                    name: "マニュアル発火",
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

<style scpped>
.build {
    position: absolute;
    top: 10px;
    right: 10%;
    z-index: 999;
}

.footer {
    width: 100%;
    text-align: right;
    font-size: 5px;
    color: gray;
}
</style>

<!--
TODO
- 「実行タイプ：毎週」の特殊分岐の実装箇所がハードコートされている
- 「実行タイプ：毎週」のEnumを統一する(別コンポーネントでは「毎週」)
- データを取得する実装がまだ終わっていない
-->

<template>
    <v-container>
        <v-sheet class="d-flex" color="grey lighten-3 mb-3" height="200"></v-sheet>
        <v-expansion-panel>
            <v-subheader>ジョブ一覧</v-subheader>
            <v-expansion-panel-content v-for="job in jobs" :key="job.name" class="pa-0">
                <div slot="header">{{ job.name }}</div>
                <v-card class="pa-4">
                    <!-- 詳細設定 -->
                    <div class="build">
                        <v-btn flat icon>
                            <v-icon color="secondary" @click="job_setting(job)">settings</v-icon>
                        </v-btn>
                    </div>
                    <v-layout>
                        <v-chip
                            outline
                            color="accent"
                            v-if="job.schedule.type
                            == $store.state.enum.SCHEDULED_EVERYWEEK.display_name_ja"
                        >{{ job.schedule.type + job.schedule.day}}</v-chip>
                        <v-chip outline color="accent" v-else>{{ job.schedule.type}}</v-chip>
                        <v-chip outline color="primary" v-if="job.is_active == true">稼働中</v-chip>
                        <v-chip outline color="error" v-else>停止中</v-chip>
                    </v-layout>
                    <v-list dense class="mb-5">
                        <!-- 毎週実行の時は曜日も表示 -->
                        <v-list-tile
                            v-if="job.schedule.type
                            == $store.state.enum.SCHEDULED_EVERYWEEK.display_name_ja"
                        >
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
            // ユーザーの登録しているジョブの配列
            jobs: [
                {
                    name: "動画広告ツイート",
                    schedule: {
                        type: this.$store.state.enum.SCHEDULED_EVERYWEEK
                            .display_name_ja,
                        day: this.$store.state.enum.display_weekdays[1]
                    },
                    exec_time: "10:00",
                    updated_at: "2019-01-01 11:00:00",
                    created_at: "2019-01-01 10:00:00",
                    is_active: true
                },
                {
                    name: "プラベ募集",
                    schedule: {
                        type: this.$store.state.enum.SCHEDULED_EVERYDAY
                            .display_name_ja
                    },
                    exec_time: "10:00",
                    updated_at: "2018-01-01 12:34:56",
                    created_at: "2018-01-01 01:23:45",
                    is_active: true
                },
                {
                    name: "イベント告知用",
                    schedule: {
                        type: this.$store.state.enum.SCHEDULED_ONCE
                            .display_name_ja
                    },
                    exec_time: "10:00",
                    updated_at: "2019-01-01 11:00:00",
                    created_at: "2019-01-01 10:00:00",
                    is_active: false
                }
            ]
        };
    },
    methods: {
        job_setting(job) {
            // 選択したjobをVuexに保存
            this.$store.dispatch("job/save_your_job", job);
            this.$router.push("/job/update");
        }
    }
};
</script>

<style scpped>
.build {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 1;
}

.footer {
    width: 100%;
    text-align: right;
    font-size: 5px;
    color: gray;
}
</style>

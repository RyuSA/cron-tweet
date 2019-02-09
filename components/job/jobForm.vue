<!-- 
TODO
- 「実行タイプ：毎週」の特殊分岐の実装箇所がハードコートされている
- データを登録してもらう実装がまだ終わっていない
-->

<template>
    <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
            ジョブ名
            <small>{{input_data.name}}</small>
        </v-stepper-step>
        <v-stepper-content step="1" ref="job_name_form">
            <v-text-field v-model="input_data.name" required></v-text-field>
            <v-btn color="primary" :disabled="!input_data.name" @click="goto_next">Continue</v-btn>
            <v-btn flat @click="goto_back">Back</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
            タイプ
            <small>{{input_data.schedule.type}} {{ input_data.schedule.day }}</small>
        </v-stepper-step>
        <v-stepper-content step="2">
            <v-select :items="types" v-model="input_data.schedule.type"></v-select>
            <v-select
                :items="days"
                v-if="input_data.schedule.type == '毎週'"
                v-model="input_data.schedule.day"
            ></v-select>
            <v-btn
                color="primary"
                @click="goto_next"
                :disabled="input_data.schedule.type == '毎週' ? !input_data.schedule.type || !input_data.schedule.day : !input_data.schedule.type"
            >Continue</v-btn>
            <v-btn flat @click="goto_back">Back</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
            時刻
            <small>{{input_data.exec_time}}</small>
        </v-stepper-step>
        <v-stepper-content step="3">
            <v-dialog
                ref="dialog"
                v-model="time_picker_modal"
                :return-value.sync="input_data.exec_time"
                persistent
                lazy
                full-width
                width="290px"
            >
                <v-text-field
                    slot="activator"
                    v-model="input_data.exec_time"
                    label="Picker in dialog"
                    prepend-icon="access_time"
                    readonly
                ></v-text-field>
                <v-time-picker
                    v-if="time_picker_modal"
                    v-model="input_data.exec_time"
                    format="24hr"
                    full-width
                >
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="time_picker_modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(input_data.exec_time)">OK</v-btn>
                </v-time-picker>
            </v-dialog>
            <v-btn color="primary" @click="goto_next" :disabled="!input_data.exec_time">Continue</v-btn>
            <v-btn flat @click="goto_back">Back</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 4" step="4">ツイート内容</v-stepper-step>
        <v-stepper-content step="4">
            <v-textarea v-model="input_data.content"></v-textarea>
            <v-btn color="primary" @click="goto_next" :disabled="!input_data.content">Continue</v-btn>
            <v-btn flat @click="goto_back">Back</v-btn>
        </v-stepper-content>

        <v-stepper-step step="5">確認</v-stepper-step>
        <v-stepper-content step="5">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="submit">Submit</v-btn>
            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
    </v-stepper>
</template>

<script>
export default {
    components: { StepButton },
    props: ["job_data"],
    data() {
        return {
            // カーソル
            e6: 1,
            // 実行タイプ
            types: ["毎日", "毎週", "マニュアル"],
            // 曜日
            days: [
                "日曜日",
                "月曜日",
                "火曜日",
                "水曜日",
                "木曜日",
                "金曜日",
                "土曜日"
            ],
            // 実行時刻
            time_picker_modal: null,
            // ユーザー入力データ
            input_data: null
        };
    },
    created: function() {
        this.input_data = Object.assign(
            {},
            this.input_data,
            this.$props.job_data
        );
    },
    methods: {
        // 次のコンソールへ移動する
        goto_next: function() {
            this.moveE6(1);
        },
        // 一つ前のコンソールへ移動する(移動できない場合は最初へ戻る)
        goto_back: function() {
            this.moveE6(-1);
        },
        // コンソールを移動する ただし1未満になる場合は1にする
        moveE6: function(num) {
            console.log("hoge");
            if (this.e6 + num < 1) {
                this.e6 = 1;
            } else {
                this.e6 += num;
            }
        },
        // 登録内容をサーバーに転送する
        submit: function() {
            console.log("comming soon");
        }
    }
};
</script>

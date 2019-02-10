import Vuex from 'vuex'

export const state = () => ({
    // ユーザーが選択したジョブ(詳細画面で使う)
    instance: {
        name: null,
        schedule: {
            type: null,
            day: null
        },
        exec_time: null,
        updated_at: null,
        created_at: null,
        is_active: false,
        // ジョブIDはサーバー側で処理
        job_id: null,
        // インスタンスが既存データのものか新規データのものかを確認
        is_new_instance: true
    }
})

export const mutations = {
    save_job_instance(state, new_job, is_new_job) {
        // ディープコピー
        state.instance = JSON.parse(JSON.stringify(new_job));
        // 既存データのため新規データフラグはオフ
        state.instance.is_new_instance = is_new_job;
        console.log(state.instance);
    }
}

export const actions = {
    reset_job_instance(context) {
        // 空のjobデータを生成する
        context.commit('save_job_instance',
            {
                name: null,
                schedule: {
                    type: null,
                    day: null
                },
                exec_time: null,
                updated_at: null,
                created_at: null,
                is_active: false,
                job_id: null,
                is_new_instance: true
            },
            true);
    },
    save_your_job(context, job) {
        context.commit('save_job_instance', job, false);
    }
}
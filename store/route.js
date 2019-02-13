
export const state = () => ({
    // ページの名前
    page_name: "Cronツイート"
})

export const mutations = {
    set_name(state, name) {
        state.page_name = name;
    }
}

export const actions = {
    route(context, name) {
        // 空のjobデータを生成する
        context.commit('set_name', name);
    }
}
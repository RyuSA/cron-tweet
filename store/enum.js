export const state = () => ({
    // 曜日定数
    weekdays: [
        { id: 0, display_name_ja: "日曜日" },
        { id: 1, display_name_ja: "月曜日" },
        { id: 2, display_name_ja: "火曜日" },
        { id: 3, display_name_ja: "水曜日" },
        { id: 4, display_name_ja: "木曜日" },
        { id: 5, display_name_ja: "金曜日" },
        { id: 6, display_name_ja: "土曜日" }
    ],
    display_weekdays: [
        "日曜日",
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日"
    ],

    // スケジュールタイプEnum
    SCHEDULED_EVERYDAY: {
        id: 0,
        display_name_ja: "毎日"
    },
    SCHEDULED_EVERYWEEK: {
        id: 1,
        display_name_ja: "毎週"
    },
    SCHEDULED_ONCE: {
        id: 2,
        display_name_ja: "単発"
    },

    // スケジュールタイプ一覧
    schedule_types: [
        state.SCHEDULED_EVERYDAY,
        state.SCHEDULED_EVERYWEEK,
        state.SCHEDULED_ONCE
    ],

    display_schedule_types: [
        "毎日",
        "毎週",
        "単発"
    ],
})

export const getter = {
    get_weekday(state, id) {
        return state.weekdays.find(weekday => weekday.id === id);
    },
    get_schedule_type(state, id) {
        return state.schedule_types.find(type => type.id === id);
    }
}
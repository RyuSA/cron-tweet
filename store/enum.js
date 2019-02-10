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

    // スケジュールタイプ一覧
    schedule_types: [
        { id: 0, display_name_ja: "毎日" },
        { id: 1, display_name_ja: "毎週" },
        { id: 2, display_name_ja: "単発" }
    ],

    // スケジュールタイプEnum
    EVERY_DAY: 0,
    EVERY_WEEK: 1,
    ONCE: 2

})

export const getter = {
    get_weekday(state, id) {
        return state.weekdays.find(weekday => weekday.id === id);
    },
    get_schedule_type(state, id) {
        return state.schedule_types.find(type => type.id === id);
    }
}
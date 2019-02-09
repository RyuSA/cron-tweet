<template>
    <v-app>
        <v-card flat style="height: 100vh;">
            <v-toolbar color="primary" dark extended flat>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            </v-toolbar>
            <v-layout wrap>
                <v-navigation-drawer v-model="drawer" absolute temporary>
                    <v-list class="pa-1">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <img :src="user.icon_url">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ user.screen_name }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>

                    <v-list class="pt-0" dense>
                        <v-divider class="py-2"></v-divider>

                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>help_outline</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>ヘルプ</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>settings</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>共通設定</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>create</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>新規作成</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
            </v-layout>

            <v-layout row>
                <v-flex xs10 offset-xs1>
                    <v-card class="card--flex-toolbar">
                        <v-toolbar card prominent>
                            <v-toolbar-title class="grey--text">Dashboard</v-toolbar-title>
                        </v-toolbar>

                        <v-divider></v-divider>

                        <v-card-text class="pa-0">
                            <nuxt/>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            user: {
                screen_name: "RyuSA",
                icon_url: "https://github.com/ryusa.png"
            }
        };
    }
};
</script>


<style>
.card--flex-toolbar {
    margin-top: -64px;
}
</style>


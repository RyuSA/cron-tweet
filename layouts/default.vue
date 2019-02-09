<template>
    <v-card flat>
        <v-toolbar color="primary" dark extended flat>
            <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-toolbar>

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
</template>

<style>
.card--flex-toolbar {
    margin-top: -64px;
}
</style>


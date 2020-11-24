<template>
  <v-container class="general-color center">
    <v-row class="text-center">
      <v-col cols="12">
        <v-card flat>
          <v-snackbar v-model="snackbar" absolute top right color="success">
            <span>Registration successful!</span>
            <v-icon dark>mdi-checkbox-marked-circle</v-icon>
          </v-snackbar>
          <v-form ref="form" class="general-color" @submit.prevent="submit">
            <v-container class="general-color" fluid>
              <img src="../../assets/logo.png" class="main-logo">
              <v-row>
                <v-col cols="3" sm="3"></v-col>
                <v-col cols="6" sm="6">
                  <v-card-text>
                    <v-subheader class="pa-0">Where would you like to go?</v-subheader>
                    <v-autocomplete
                      v-model="form.mainSearch"
                      :hint="'Write here where you do you wanna go'"
                      :items="places"
                      :label="'Your Location'"
                      persistent-hint
                      prepend-icon="mdi-magnify"
                    ></v-autocomplete>
                  </v-card-text>
                </v-col>
                <v-col cols="3" sm="3"></v-col>

                <v-col cols="3" sm="3">
                  <v-select
                    hide-details
                    v-model="form.combo"
                    :items="combos"
                    color="pink"
                    label="Search For"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="3" sm="3">
                  <v-text-field
                    v-model="form.city"
                    color="purple darken-2"
                    required
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col class="btn-flex" cols="2" sm="2">
                  <v-btn-toggle hide-details v-model="form.monetaryValue" mandatory>
                    <v-btn small depressed color="cyan lighten-4">
                      <v-icon>mdi-currency-usd</v-icon>
                    </v-btn>
                    <v-btn small depressed color="cyan lighten-4">
                      <v-icon>mdi-circle-multiple-outline</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>

                <v-col cols="4" sm="4">
                  <v-combobox
                    v-model="form.tags"
                    :items="items"
                    hide-selected
                    label="Search for an option"
                    multiple
                    x-small-chips
                    solo
                    hide-details
                    flat
                  >
                    <template v-slot:selection="{ attrs, item, parent, selected }" >
                      <v-chip
                        v-if="item === Object(item)"
                        v-bind="attrs"
                        :color="`${item.color} lighten-3`"
                        :input-value="selected"
                        label
                        x-small
                        class="ma-2"
                        outlined
                      >
                        <span class="pr-1">{{ item.text }}</span>
                        <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
                      </v-chip>
                    </template>
                    <template v-slot:item="{ index, item }">
                      <v-chip
                        :color="`${item.color} lighten-3`"
                        dark
                        label
                        x-small
                        class="ma-2"
                        outlined
                      >{{ item.text }}</v-chip>
                    </template>
                  </v-combobox>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions class="submit-button btn-color">
              <v-btn  text class="btn-color" type="submit">Pesquisar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./HomePage.js"></script>
<style src="./HomePage.css"></style>


<!--<v-dialog v-model="terms" width="70%">
            <v-card>
              <v-card-title class="title">Terms</v-card-title>
              <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="purple" @click="terms = false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
<!-- 


-->
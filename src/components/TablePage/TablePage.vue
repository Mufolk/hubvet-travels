<template>
  <div>
    <v-app-bar class="menu-bar" dense flat color="white">
      <img src="../../assets/menu-logo.png" class="menu-logo" @click="toMainPage">
      <v-spacer></v-spacer>
      <v-btn class="menu-btn" icon color="cyan" >
        <v-icon large >mdi-face-profile-woman</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid>
      <v-toolbar flat color="grey lighten-4">
        <v-col cols="4" sm="4">
          <v-card-text>
            <v-text-field
              hide-details
              color="purple darken-2"
              v-model="search"
              :label="'Where you wanna go'"
              prepend-icon="mdi-magnify"
              class
            ></v-text-field>
          </v-card-text>
        </v-col>
        <v-col cols="3" sm="3">
          <v-text-field hide-details v-model="city" color="purple darken-2" :label="'Where are you at?'"></v-text-field>
        </v-col>

        <v-col cols="1" sm="1" class="ma-2">
          <v-btn-toggle hide-details mandatory v-model="monetaryValue">
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
            :items="tags"
            v-model="selectedTags"
            hide-details
            label="Search for an option"
            multiple
            x-small-chips
          >
            <template v-slot:selection="{ attrs, item, parent, selectedTags }">
              <v-chip
                v-if="item === Object(item)"
                v-bind="attrs"
                :color="`${item.color} lighten-3`"
                :input-value="selectedTags"
                x-small
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
      </v-toolbar>
      <v-col cols="8">
        <v-card>
          <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:header>
              <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
                <v-tab v-for="item in itemTypes" :key="item">{{ item }}</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in itemTypes" :key="item">
                  <v-card flat>
                    <v-data-table
                      v-model="selected"
                      :headers="headers"
                      :items="items"
                      :search="search"
                      item-key="name"
                      show-select
                      class="elevation-1"
                      :expanded.sync="expanded"
                      show-expand
                    >
                      <template v-slot:expanded-item="{ headers, item }">
                        <td v-if="item.packageItems" :colspan="headers.length">
                          <v-data-table
                            v-model="selected"
                            :items="item.packageItems"
                            item-key="name"
                            show-select
                          ></v-data-table>
                        </td>
                      </template>
                    </v-data-table>
                    <template v-slot:footer>
                      <v-row class="mt-2" align="center" justify="center">
                        <span class="grey--text">Items per page</span>
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
                              {{ itemsPerPage }}
                              <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(number, index) in itemsPerPageArray"
                              :key="index"
                              @click="updateItemsPerPage(number)"
                            >
                              <v-list-item-title>{{ number }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
                        <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                          <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                          <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-row>
                    </template>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </template>
          </v-data-iterator>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script src="./TablePage.js"></script>
<style src="./TablePage.css"></style>

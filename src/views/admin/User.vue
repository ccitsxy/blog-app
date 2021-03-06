<template>
  <v-card flat>
    <v-card-title class="pt-3 pl-3 pr-3 pt-sm-4 pl-sm-4 pr-sm-2">
      <v-text-field
        v-model="search"
        hide-details
        background-color="white"
        outlined
        clearable
        dense
        label="搜索"
      >
        <v-btn
          class="ml-2"
          height="40"
          slot="append-outer"
          color="primary"
          dark
          @click="createItem"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-text-field>
    </v-card-title>
    <v-data-table
      class="mx-sm-4"
      :items="users"
      :headers="headers"
      :search="search"
      :options="{itemsPerPage:15}"
    >
      <template v-slot:item.actions="
      /* eslint-disable-next-line vue/no-unused-vars */
      {item}">
        <v-btn
          icon
          class="mr-2"
          color="success"
        >
          <v-icon
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          icon
          color="error"
        >
          <v-icon
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      max-width="300px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  dense
                  outlined
                  hide-details
                  v-model="editedItem.username"
                  label="账号"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">取消</v-btn>
          <v-btn color="blue darken-1" text @click="save">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { findAllUsers } from '@/api/user'

export default {
  name: 'User',
  data () {
    return {
      headers:
        [
          {
            text: '序号',
            value: 'uid'
          },
          {
            text: '账号',
            sortable: false,
            value: 'username'
          },
          {
            text: '创建时间',
            value: 'created'
          },
          {
            text: '修改时间',
            value: 'updated'
          },
          {
            text: '操作',
            value: 'actions',
            sortable: false
          }
        ],
      users: [],
      search: '',
      dialog: false,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {
        name: ''
      }
    }
  },
  created () {
    findAllUsers().then((response) => {
      this.users = response.data
    })
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新建用户' : '编辑用户'
    }
  },
  watch: {
    page () {
      this.getUsers()
    },
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    createItem () {
      this.dialog = true
    },
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

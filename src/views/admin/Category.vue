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
      :items="categories"
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
                  v-model="editedItem.name"
                  label="名称"
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
export default {
  name: 'Category',
  data () {
    return {
      headers:
        [
          {
            text: '序号',
            value: 'cid'
          },
          {
            text: '名称',
            sortable: false,
            value: 'name'
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
      categories: [],
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
    this.getCategories()
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新建分类' : '编辑分类'
    }
  },
  watch: {
    page () {
      this.getCategories()
    },
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    getCategories () {
      this.$http.get(`${process.env.VUE_APP_BASE_API}/category/`).then((response) => {
        this.categories = response.data
      })
    },
    createItem () {
      this.dialog = true
    },
    editItem (item) {
      this.editedIndex = this.categories.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.categories.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.tags.splice(index, 1)
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
        Object.assign(this.categories[this.editedIndex], this.editedItem)
      } else {
        this.categories.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

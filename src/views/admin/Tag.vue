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
      :items="tags"
      :headers="headers"
      :search="search"
      :options="{itemsPerPage:15}"
    >
      <template v-slot:item.actions="{item}">
        <v-btn
          icon
          class="mr-2"
          color="success"
          @click="editItem(item)"
        >
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          icon
          color="error"
          @click="deleteItem(item)"
        >
          <v-icon>
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
                  outlined
                  dense
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
import { createOrUpdateTag, findAllTags, deleteTag } from '@/api/tag'

export default {
  name: 'Tag',
  data () {
    return {
      headers:
        [
          {
            text: '序号',
            value: 'tid'
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
      tags: [],
      search: '',
      dialog: false,
      editedIndex: -1,
      editedItem: {
        tid: null,
        name: ''
      },
      defaultItem: {
        tid: null,
        name: ''
      }
    }
  },
  created () {
    this.getTags()
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新建标签' : '编辑标签'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    getTags () {
      findAllTags().then((response) => {
        this.tags = response.data
      })
    },

    createItem () {
      this.dialog = true
    },
    editItem (item) {
      this.editedIndex = this.tags.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    async deleteItem (item) {
      const res = await this.$dialog.confirm({
        title: '删除标签',
        text: '确认要删除标签吗',
        actions:
          [
            {
              text: '取消',
              color: 'blue',
              key: 'false'
            },
            {
              text: '确认',
              color: 'red',
              key: 'true'
            }
          ]
      })
      if (res) {
        deleteTag(item.tid)
        this.tags.splice(this.editedIndex, 1)
        this.getTags()
      }
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      createOrUpdateTag(this.editedItem)
        .then(() => {
          this.getTags()
        })
      if (this.editedIndex > -1) {
        Object.assign(this.tags[this.editedIndex], this.editedItem)
      } else {
        this.tags.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

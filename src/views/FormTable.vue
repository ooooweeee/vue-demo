<template>
  <a-form ref="formRef" :model="formState">
    <a-table :rowKey="'id'" :columns="columns" :data-source="data">
      <template #remark="{ index }">
        <a-form-item
          :name="['remark', index]"
          :rules="{
            validator: validatorRemark,
            trigger: 'submit'
          }"
        >
          <a-input v-model:value="formState.remark[index]" autocomplete="off" />
        </a-form-item>
      </template>
    </a-table>
    <a-button type="primary" @click="onSubmit">Submit</a-button>
  </a-form>
</template>

<script>
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { Form, Input, Button, Table } from 'ant-design-vue'

export default defineComponent({
  setup() {
    const formRef = ref()
    const formState = reactive({
      remark: []
    })

    const columns = [
      {
        title: '描述',
        dataIndex: 'desc'
      },
      {
        title: '备注',
        slots: {
          customRender: 'remark'
        }
      }
    ]

    const data = [
      {
        id: 0,
        desc: '成人高考英语'
      },
      {
        id: 1,
        desc: '高等数学'
      }
    ]

    const validatorRemark = (rule, value) => {
      if (!value) {
        return Promise.reject('请填写备注')
      }
      return Promise.resolve()
    }

    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', toRaw(formState))
        })
        .catch(error => {
          console.log('error', error)
        })
    }

    return {
      formRef,
      formState,

      columns,
      data,

      validatorRemark,
      onSubmit
    }
  },
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Button.name]: Button,
    [Table.name]: Table
  }
})
</script>

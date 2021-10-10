<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="formRules"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-item has-feedback label="Account" name="account">
      <a-input v-model:value="formState.account" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Password" name="password">
      <a-input
        v-model:value="formState.password"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { Form, Input, Button } from 'ant-design-vue'

export default defineComponent({
  setup() {
    const formRef = ref()
    const formState = reactive({
      account: '',
      password: ''
    })
    const formRules = {
      account: [
        {
          required: true,
          validator: (rule, value) => {
            return Promise.reject('请填写')
          },
          trigger: 'blur'
        }
      ],
      password: [
        {
          validator: (rule, value) => {
            return Promise.resolve()
          },
          trigger: 'submit'
        }
      ]
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
      formRules,
      onSubmit
    }
  },
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Button.name]: Button
  }
})
</script>

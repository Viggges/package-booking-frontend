<template>
  <div id="packageIn">
    <h2>包裹入库</h2>
    <a-form :form="form" @submit.prevent="handleSubmit">
      <a-form-item label="运单号：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'TrackNum',
          {rules: [{ required: true, message: 'Please input your 运单号!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="收件人：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="请输入收件人"
          v-decorator="[
          'addressee',
          {rules: [{ required: true, message: 'Please input your 收件人!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="电话：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="请输入电话"
          v-decorator="[
          'phoneNum',
          {rules: [{ required: true, message: 'Please input your 收件人!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="重量：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="请输入重量"
          v-decorator="[
          'weight',
          {rules: [{ required: true, message: 'Please input your 收件人!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
      console.log(this.form);

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$store.dispatch("addPackage",values);
        }
      });

     
    }
  }
};
</script>
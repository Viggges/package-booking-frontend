<template>
  <a-table :columns="columns" :dataSource=this.PackageList>
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle">
      <a-icon type="smile-o" />运单号
    </span>
    <span slot="action">
      <a-button @click="confirm"> 确认收货</a-button>
      
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: "trackNum",
    key: "trackNum",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "trackNum" }
  },
  {
    title: "收件人",
    dataIndex: "addressee",
    key: "addressee"
  },
  {
    title: "电话",
    dataIndex: "phoneNum",
    key: "phoneNum"
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status"
  },
  {
    title: "预约时间",
    key: "bookings",
    dataIndex: "bookings"
  },
  {
    title: "",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  data: function() {
    return {
        columns
    };
  },
  created: function() {
  },
   computed: {
    PackageList: function() {
      return this.$store.getters.getList;
    }
  },
  methods: {
    confirm: function() {
        this.$router.push("/add")
    }
  }
};
</script>
<style>
</style>
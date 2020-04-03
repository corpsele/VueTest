<template>
  <div class="listT">
    <el-tooltip class="item" effect="dark" content="Please select rss which you want to scribe" placement="top-start">
      <h3>Please select rss which you want to scribe</h3>
    </el-tooltip>
    <el-select v-model="data1" @change="selectedAction">
      <el-option v-for="obj1 in options"
                 :label="obj1.text"
                 :value="obj1.value"
                 :key="obj1.value"
      >

      </el-option>
    </el-select>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>You have selected index = {{selectedIndex}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="okAction">OK</el-button>
  </span>
    </el-dialog>
    <el-table>
      <el-row>1</el-row>
      <el-row>2</el-row>
    </el-table>
  </div>
</template>

<script>
  import VueAxios from "vue-axios";
  import {AxiosInstance as Axios} from "axios";

  export default {
    name: "ListTest",
    data() {
      return {
        hintDescription: "Please select rss which you want to scribe",
        data1: 0,
        options: [
          {value: 0, text: "Please Select Value"},
          {value: 1, text: "Seal Team"}
        ],
        dialogVisible: false,
        selectedIndex: 0
      }
    },
    methods: {
      selectedAction(num) {
        console.log("selected value = " + num);
        this.selectedIndex = num;
        this.dialogVisible = true;
      },
      init() {

      },
      handleClose(done) {
        this.$confirm('Really？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });

      },
      requestRSS(num) {
        let strApi = "";
        switch (num) {
          case 1:
            strApi = "http://rss.rrys.tv/rss/feed/35535";
            break;
          case 2:
            break;
          default:
            strApi = "";
            break;
        }

        if (num != 0) {
          Vue.axios.get(strApi).then((response) => {
            console.log(response.data)
          })
        }

      },
      okAction() {
        this.$options.methods.requestRSS(this.selectedIndex).bind(this)();
        this.dialogVisible = false;
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

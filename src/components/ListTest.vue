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
      width="30%">
<!--      :before-close="handleClose">-->
      <span>You have selected index = {{selectedIndex}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="okAction">OK</el-button>
  </span>
    </el-dialog>
    <el-table :data="arryData">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <span>{{ scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="ed2k">
        <template slot-scope="scope">
          <span>{{ scope.row.ed2k}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

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
        selectedIndex: 0,
        arryData: []
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
      okAction() {
        this.dialogVisible = false;
        let strApi = ""
        switch (this.selectedIndex) {
          case 0:
            return
            break;
          case 1:
            strApi = "/rss/feed/35535"
            break;
          default:
            return
            break;
        }
        this.$axios.get(strApi, {
          // baseURL: '/api',
          crossDomain: true,
          params:{

          }
        }).then((response) => {
          console.log(response)

          console.log(this.$x2js.xml2js(response.data))
          let obj = this.$x2js.xml2js(response.data)
          console.log("obj = " + obj)
          let rss = obj["rss"]
          console.log("rss = " +rss)
          let channel1 = rss["channel"]
          console.log("channel1 = " + channel1)
          let items = channel1["item"]
          console.log(items)
          this.arryData = items
        })

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

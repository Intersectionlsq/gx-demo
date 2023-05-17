<template>
  <div class="contain" style="display: flex;">
    <div class="left">
      <el-select v-model="num1" placeholder="请选择数字" class="select">
        <el-option v-for="(item,index) in num1s" :key="index" :value="item">
        </el-option>
      </el-select>
      <el-select v-model="symbol" placeholder="请选择符号" class="select">
        <el-option v-for="(item,index) in symbols" :key="index" :value="item">
        </el-option>
      </el-select>
      <el-select v-model="num2" placeholder="请选择数字" class="select">
        <el-option v-for="(item,index) in num2s" :key="index" :value="item">
        </el-option>
      </el-select>
      <el-button type="primary" class="but" @click="compute">计算</el-button>
    </div>
    <div class="box-card">
      <span class="title">计算结果为：</span>
      <span class="result">{{result}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num1: '',
        symbol: '',
        num2: '',
        symbols: ['+', '-', '*', '/'],
        num1s: [],
        num2s: [],
        result: 0,
      }
    },
    mounted() {
      const self = this;
      self.setNum1s();
      self.setNum2s();
    },
    methods: {
      setNum1s() {
        const self = this;
        var end = 1024;
        var start = 2;
        for (let i = start; i <= end; i = i * 2) {
          self.num1s.push(i)
        }

      },
      setNum2s() {
        const self = this;
        for (let i = 1; i <= 100; i++) {
          self.num2s.push(i);
        }
      },
      compute() {
        const self = this;
        if (self.symbols == '' || self.num1 == '' || self.num2 == '') {
          self.$message.error('运算式不完整！请补全数字/运算符！！');
          return
        }
        if (self.symbol == '+') {
          self.result = self.num1 + self.num2
        } else if (self.symbol == '-') {
          self.result = self.num1 - self.num2
        } else if (self.symbol == '*') {
          self.result = self.num1 * self.num2
        } else if (self.symbol == '/') {
          self.result = parseFloat((self.num1 / self.num2).toFixed(2))
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/.el-select .el-input {
    border-color: #409eff;
    width: 224px;
  }

  .result {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 260px;
    color: #000000;
  }

  .title {

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #909399;
    position: absolute;
    left: 449px;
    margin-top: 20px;

  }

  .box-card {
    margin-top: 40px;
    margin-left: 162px;
    width: 457px;
    height: 260px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

    border-radius: 12px;
  }

  .but {
    width: 121px;
    margin-top: 2px;
  }

  .select {
    margin-bottom: 12px;
  }

  .contain {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 330px;
    width: 910px;
    background-color: #f2f2f2;
  }

  .left {
    width: 224px;
    margin-top: 40px;
    margin-left: 43px;
    display: flex;
    flex-direction: column;
  }
</style>
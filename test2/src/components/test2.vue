<template>
  <div class="test2">
    <el-button @click=tk type="primary" style="margin-top: 25%;">点击显示二叉树打印alert</el-button>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        tree: {
          value: 'A',
          left: {
            value: 'B',
            left: {
              value: 'C'
            },
            right: {
              value: 'E',
              left: {
                value: 'H'
              },
              right: {
                value: 'I',
              }
            }
          },
          right: {
            value: 'D',
            left: {
              value: 'F'
            },
            right: {
              value: 'G',
              left: {
                value: 'J'
              }
            }
          }
        }
      }
    },
    mounted(){
      const self=this;
      console.log(self.printTree(self.tree))
    },
    methods: {
      TreeNode(x) {
        this.value = x;
        this.left = null;
        this.right = null;
      },
      tk(){
        const self = this;
        alert(self.printTree(self.tree).join('\n'));
      },
      printTree(tree) {
        const self = this;
        var quque = [tree];
        var nextFloor = [];  
        var temp;
        var level=1;
        var result = [];
        var nowFloor=[];
        if (!tree) return result;
        while (quque.length > 0 || nextFloor.length > 0) {
          if (quque.length == 0) { 
            nowFloor.unshift(level);
            result.push(nowFloor);   
            level+=1; 
            quque = nextFloor;    
            nextFloor = [];
            nowFloor = [];
          }
          temp = quque.shift();
          if (temp) {
            nowFloor.push(temp.value);
            nextFloor.push(temp.left);
            nextFloor.push(temp.right);
          }
        }
        return result;

        


      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
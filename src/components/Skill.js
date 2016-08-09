import React, { PropTypes } from 'react';
import Echarts from 'echarts';

class Skill extends React.Component {
  componentDidMount(){
    let mySkill = Echarts.init(document.getElementById('mySkill'));
    mySkill.setOption({
    color: ['#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    title:{
      text:"我的技能展示",
      textStyle:{
        fontSize:20
      },
      left:'center',

    },
    left:"44%",
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['HTML5', 'CSS3', 'PhotoShop', 'JavaScript', 'React', 'JQuery'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'百分比%'
        }
    ],
    series : [
        {
            name:'技能熟练度',
            type:'bar',
            barWidth: '46%',
            data:[94, 90,86, 89, 56, 70]
        }
    ]
});
  }
  render () {
    let style={
      root:{
        width:"80%",
        margin:"60px auto",
        padding:"70px 0",
        boxShadow:"0px 2px 5px rgba(0,0,0,0.5)",
        backgroundColor:"#fff"
      },
      skill:{
        width:"80%",
        minHeight:"500px",
        margin:"0 auto"
      }
    }
    return(
      <div style={style.root}>
        <div id="mySkill" style={style.skill}></div>
      </div>
    )
  }
}

export default Skill;

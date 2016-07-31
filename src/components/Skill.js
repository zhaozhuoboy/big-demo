import React, { PropTypes } from 'react';
import Echarts from 'echarts';

class Skill extends React.Component {
  componentDidMount(){
    let mySkill = Echarts.init(document.getElementById('mySkill'));
    mySkill.setOption({
    title : {
        text: '技能掌握',
        x:'center',
        textStyle:{
          fontSize:30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['HTML5','CSS3','JavaScript','PhotoShop','JQuery','React']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:370, name:'HTML5'},
                {value:310, name:'CSS3'},
                {value:234, name:'JavaScript'},
                {value:135, name:'PhotoShop'},
                {value:135, name:'JQuery'},
                {value:60, name:'React'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});
  }
  render () {
    let style={
      root:{
        width:"80%",
        margin:"30px auto",
        padding:"70px 0",
        boxShadow:"3px 2px 5px rgba(0,0,0,0.5)",
        backgroundColor:"#fff"
      },
      skill:{
        width:"80%",
        height:"400px",
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

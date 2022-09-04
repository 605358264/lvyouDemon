import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'
import { isTemplateExpression } from 'typescript';
interface Img{
   src:string
}
interface P{

}
interface T{
   imgArr:Img[],
   count:number
}
class App extends React.Component<P,T>{
  constructor(props: P){
    super(props)
    this.state={
      imgArr:[
        {
          src: require('./assets/img/one.jpg') 
        },
        {
          src: require('./assets/img/two.jpg')
        },
        {
          src: require('./assets/img/three.jpg')
        },
        {
          src: require('./assets/img/four.jpg')
        },
        {
          src: require('./assets/img/five.jpg')
        }
        ,{
          src: require('./assets/img/six.jpg')
        }
      ],
      count: 0
    }
  }
  add:Function =() => {
    console.log(this.state.count)
    this.setState({count:this.state.count+1})
  }
  render() {
    return(
      <>
        <div className={styles.countWrap}>
           <button className={styles.count} onClick={e=>this.add(e)}>+1</button>
        </div>
        <div className={styles.imgWrap}>
            {
              this.state.imgArr && this.state.imgArr.map((item:Img,index:number) => {
                return (
                  <div className={styles.img1}>
                    <img src = {item.src} alt="" className={styles.img3} key={index}/>
                    <button className={styles.addCar}>加入购物车</button>
                  </div>
                )
              })
            }
          </div>
      </>
    )
  }

}
export default App;

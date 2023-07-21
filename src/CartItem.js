import React from "react";

class CartItem extends React.Component{
    constructor()
    {
        super();
        this.state ={
            price:999,
            title:'Mobile Phone',
            qty : 1,
            img:''
        }
    }
    increaseQuantity = ()=>{
        console.log('this',this.state);
        // this.state.qty+=1;  // object value will increase but react will render it only one time so value will not update on screen
        // that's why we use setState to reRender

        
        // react will take the whole object and do shallow merging
        // with original state, only change the particular value

        // first way(object)
        this.setState({
            qty:this.state.qty+1,
        });

        // second way(function)   --> if we require prevState values then use it
        // this.setState((prevState)=>{
        //     return{
        //         qty:prevState.qty+1
        //     };
        // });
    }
    decreaseQuantity = ()=>{
        console.log('this',this.state);
        this.setState({
            qty:this.state.qty-1,
        });
    }
    render(){
        const {price,title,qty,img}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} alt={`${title}-image` }style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        alt="increase" 
                        className="action-icons"
                        onClick={this.increaseQuantity}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease" className="action-icons" onClick={this.decreaseQuantity} />
                        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
      height:110,
      width:110,
      borderRadius: 10
    }
  }
export default CartItem;
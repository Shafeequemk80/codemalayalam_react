import React from "react"
import './AddNew.css'
class AddNew extends React.Component{
constructor(props){
    super(props)

    this.state={
        titleInput:''
    }
}

handlechange=((e)=>{
    const value = e.target.value
    this.setState({
        titleInput:value
    })
})
handleClick=(()=>{

})

render(){
    return(
        <div  className="addnew">
            <input value={this.state.titleInput} onChange={this.handlechange} type="text" />
            <button onClick={this.handleClick}>Click</button>
        </div>
    )
}
    }
export default AddNew
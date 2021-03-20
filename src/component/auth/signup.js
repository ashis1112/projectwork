import React,{Component} from 'react'

class Signup extends Component{

    constructor(){
        super()
        this.state={
            name:'',
            lastname:'',
            email:'',
            password:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({name:'',password:'',lastname:'',email:''})
    }
    change=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        return(
            <div className='container'>
                <form onSubmit={this.submit} className="white">
                    <h5 className='grey-text text-darken-3'>Signup</h5>
                    <div className='input-field'>
                        <label>Firstname</label>
                        <input type='text' id='name' onChange={this.change}/>
                    </div>
                    <div className='input-field'>
                        <label>Lastname</label>
                        <input type='text' id='email' onChange={this.change}/>
                    </div>
                    <div className='input-field'>
                        <label>Email</label>
                        <input type='email' id='email' onChange={this.change}/>
                    </div>
                    <div className='input-field'>
                        <label>Password</label>
                        <input type='password' id='password' onChange={this.change} />
                    </div>
                    
                    <div className='input-field'>
                        <button className='btn pink lignten-1 z-depth-0'>Signup    <i class="material-icons right">send</i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup
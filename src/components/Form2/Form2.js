import './Form2.css';
import img from "../../images/image8.jpg";
import CloseIcon from '@mui/icons-material/Close';

export default function Form2(props) {


    function on() {
        props.funcP(true)
    }
      
      function off() {
        props.funcP(false)
    }
    function handleChange(e){
       const value= e.target.value
        console.log(value)
    }
    function handleSubmit(e){
        // 👇️ prevent page refresh
        e.preventDefault();

      };
  
    return ( 
        <div className='Form2'>
            {props.dataP===true?
                 <div id="overlay" >
                    <div className="formContainer"  >
                        <div className='close' onClick={off}>
                            <CloseIcon className='icon'/>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {props.typeP==="profile"?
                                <>
                                    <div className='item item1'>
                                        <ul>
                                            <li>
                                                <img src={img}  alt=''/>
                                            </li> 
                                            <li>
                                                <span>
                                                    <button style={{display:"block",width:"120px",height:"30px"}} onClick={()=>{document.getElementById('getFile').click()}}>Change avatar</button>
                                                    <input type='file' id="getFile" style={{display:"none"}} accept=".jpg, .jpeg, .png"/> 
                                                </span> 
                                            </li> 
                                        </ul> 
                                    </div>

                                    <div className='item item2 first'>
                                        <div className='label size'>firstName</div>
                                       
                                        <div className='size'>
                                        <input type="text" name='firstName' onChange={handleChange} value="chinaza"/>
                                        </div>
                                    </div>

                                    <div className='item item3'>
                                        <div className='label size'>lastName</div>
                                       
                                        <div className='size'>
                                        <input type="text" name='firstName' onChange={handleChange} value="chinaza"/>
                                        </div>
                                    </div>
                                    <div className='item item4'>
                                        <div className='label size'>tel</div>
                                       
                                        <div className='size'>
                                        <input type="text" name='firstName' onChange={handleChange} value="chinaza"/>
                                        </div>
                                    </div>
                                    <div className='item item5'>
                                        <div className='label size'>Address</div>
                                       
                                        <div className='size'>
                                        <textarea type="text" name='firstName' onChange={handleChange} value="chinaza"/>
                                        </div>
                                    </div>
                                    

                                    <div className='item item6'>
                                        <div className='button'>Update</div>
                                    
                                    </div>
                
                                   
                                </>
                            :
                                <>
                                    {
                                        props.typeP==="password"?
                                        <>  
                                            <div className='item item7 first '>
                                                <div className='label size'>password</div>
                                            
                                                <div className='size'>
                                                <input type="text" name='firstName' onChange={handleChange} value="chinaza"/>
                                                </div>
                                            </div>

                                            <div className='item item8'>
                                                <div className='button'>Update password</div>
                                            </div>

                                        </>
                                        :
                                        <>
                                            {
                                             props.typeP==="wallet"?
                                                <>
                                                    <div className='item item7 first'>
                                                        <div className='label size'>Amount</div>
                                                        <div className='size'>
                                                            <input type="tel" name='amount' onChange={handleChange} value="1000"/>
                                                        </div>
                                                    </div>
                                                    <div className='item item7'>
                                                        <div className='label size'>Email</div>
                                                        <div className='size'>
                                                            <input type="text" name='firstName' onChange={handleChange} value="Enter email address"/>
                                                        </div>
                                                    </div>
                                                    <div className='item item8'>
                                                        <div className='button'>submit</div>
                                                    </div>
                                                </>
                                                :
                                                ''
                                            }
                                        </>
                                    }
                                </>
                            }
                            

                        </form>
                    </div>
                 </div>
            :
                ''
            }
        </div>
    )
}

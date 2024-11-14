import { useState } from 'react';
import userIcon from '../assets/usericon.svg'
import keyIcon from '../assets/keylock.svg'
export default function SubscriptionComp(){

const [dataSubscription,setDataSubscription] = useState({
    name: '',
    email:'',
    password: '',
})
const subscriptionUser = (e) =>{
    e.preventDefault()
}
return(
<>
<div className="boxDivClass divLogIn">
    <div className="titleSpaceClass">
    <h1> Subscription </h1>
    </div>
    <div className="connexionSpaceClass">
        <form onSubmit={subscriptionUser}>
        <label id="userNameLogInId" className="labelClass" htmlFor="loginuserName">Name
        </label>
        <div className="inputSpaceClass">
       <img
          className="loginIcon"
          src={userIcon}
          alt="icon"/>
          <input id="loginuserName" name="loginnameinput" type="text" className="inputcssClass" placeholder="Veuillez entrer votre nom" value={dataSubscription.name} onChange={(e)=>setDataSubscription({...dataSubscription, name: e.target.value})}/>
        
        <br/>
        </div>

        <label id="userMailLogInId" className="labelClass" htmlFor="userMail">Mail</label>
        <div className="inputSpaceClass">        
    <img
          className="loginIcon"
          src={keyIcon}
          alt="icon"/>
          <input id="userMail" name="loginmailinput" type="email" className="inputcssClass" placeholder="Entrez votre e-mail" required value={dataSubscription.email} onChange={(e)=>setDataSubscription({...dataSubscription, email: e.target.value})}/>
        <br/>
        </div>

        <label id="userPswdLogInId" className="labelClass" htmlFor="userPswd">Mot de passe</label>
            <div className="inputSpaceClass">        
            <img
          className="loginIcon"
          src={keyIcon}
          alt="icon"/>
                <input id="userPswd" name="loginpswdinput" type="password" className="inputcssClass" placeholder="Entrez votre mot de passe" required value={dataSubscription.password} onChange={(e)=>setDataSubscription({...dataSubscription, password: e.target.value})}/>
            <br/>
        </div>

<div className='btnSpaceClass'>

        <div className='soloBtnSpaceClass'>
            <label id="userSubmitLogInId" className="labelClass" htmlFor="userSubmit">
                <input id="userSubmit" name="loginSubmitinput" type="submit" className="buttoncssClass loginBtn"  value="Soumettre"/>
            </label>
        </div>

        <div className='soloBbtnSpaceClass'>
            <label id="userSubscriptionLogInId" className="labelClass" htmlFor="userSubscription">
                <input id="userSubscription" name="loginSubscriptioninput" type="submit" className="buttoncssClass loginBtn"  value="S'inscrire"/>
            </label> 
        </div>
</div>
        </form>
</div>
</div>

</>
)
}
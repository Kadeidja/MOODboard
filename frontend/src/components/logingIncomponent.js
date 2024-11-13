//import { useId } from 'react';
import userIcon from '../assets/usericon.svg'
import keyIcon from '../assets/keylock.svg'
export default function LogInComp(){
    return(
<>
<div className="boxDivClass divLogIn">
    <div className="titleSpaceClass">
    <h1> LogIn In </h1>
    </div>
    <div className="connexionSpaceClass">
        <label id="userNameLogInId" className="labelClass" htmlFor="loginuserName">Name
</label>
<div className="inputSpaceClass">

       <img
          className="loginIcon"
          src={userIcon}
          alt="icon"/>
          <input id="loginuserName" name="loginnameinput" type="text" className="inputcssClass" placeholder="Veuillez entrer votre nom"/>
        
        <br/>
</div>
<label id="userPswdLogInId" className="labelClass" htmlFor="userPswd">Mot de passe</label>

<div className="inputSpaceClass">        
    <img
          className="loginIcon"
          src={keyIcon}
          alt="icon"/>
          <input id="userPswd" name="loginpswdinput" type="password" className="inputcssClass" placeholder="Entrez votre mot de passe"/>
        <br/>
</div>

<div>
<label id="userSubmitLogInId" className="labelClass" htmlFor="userSubmit">
        <input id="userSubmit" name="loginSubmitinput" type="submit" className="buttoncssClass"  value="Soumettre"/>
        </label><br/>
</div>
</div>
</div>

</>
)
}
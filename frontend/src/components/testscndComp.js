import React, { Fragment, useEffect, useState } from 'react';//pour le lien entre le front et le back
// THIS OK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
 function TestCompScnd (){
    const [dataTests, setDataTests] = useState('');
    let responseClone ; // 1

    useEffect(() => {
      fetch('/test',
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataTests),
      })//revoir le lien
      
      .then(function (response) {
        responseClone = response.clone(); // 2
        return response.json();
    })
        .then(res => {
          console.log(dataTests);
          return res.json()
          
        })
        .then(dataTests => {
           setDataTests(dataTests);
         }, 
         function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
            .then(function (bodyText) {
                console.log('Received the following instead of valid JSON:', bodyText); // 6
            });}
        
        
        )
    }, []);
*/
    function TestCompScnd() {
        const [dataTests, setDataTests] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            const response = await fetch('/test');
            const jsonData = await response.json();
            setDataTests(jsonData);
          }
          fetchData();
        }, []);


return(
    <>
    {dataTests ? dataTests.map(test =>
                <div key={test.testelemid} className="subpartClass">
                    <h3 className="subtitleClass">{test.testTitle}</h3>  
                <div>
                { test.testelemtext.map((subtest)=>{
                    return(
                        <p key={subtest.tsttxtid}>{subtest.tsttxt}</p>
                    )
                 } )}
                 { test.testelemimgsrc.map((subimg)=>{
                    return(
                        <img src={subimg.tstimgsrc} alt={subimg.tstimgsrc} className="subimgClass"/>
                    )
                 })}
                 </div>  
                 </div>
        
        ) : 'Loading...'}
    </>
)

}
export default TestCompScnd;
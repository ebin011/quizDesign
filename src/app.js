import React, { Component } from 'react';
import Header from './appBar';
import SurveyBar from './surveyBar';



class App extends Component {
 render() {
   console.log("hello");
   return (
            <div>
               <SurveyBar />

               <div className="main" >
                   {this.props.children}
               </div>

              
           </div>
   );
 }
}

export default App;
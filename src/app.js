import React, { Component } from 'react';
import QuizAppBar from './quizAppBar';



class App extends Component {
 render() {
   console.log("hello");
   return (
            <div>
               <QuizAppBar />

               <div className="main" >
                   {this.props.children}
               </div>

              
           </div>
   );
 }
}

export default App;
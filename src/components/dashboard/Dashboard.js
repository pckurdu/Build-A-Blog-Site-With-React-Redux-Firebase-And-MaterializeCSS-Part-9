import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

//import connect module
import {connect} from 'react-redux';

//connect firestore
import { firestoreConnect } from 'react-redux-firebase';
//to merge
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
  //  console.log(this.props);

    //let's use projects object
    const {projects}=this.props;

    return (
      <div className="dashboard container">
        <div className="row">
        {/* 6 pieces were used depending on the grid structure. */}
          <div className="col s12 m6">
            {/* here ProjectList Component  */}
            <ProjectList projects={projects}/>
          </div>
          {/* Depending on the grid structure, 5 pieces were used and 1 column was shifted. */}
          <div className="col s12 m5 offset-m1">
            {/* here Notifications Component  */}
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

//function that gets data from store
const mapStateToProps=(state)=>{
  console.log(state);
  
  return {
    //Let's get the data from the firestore.
    projects:state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'projects'}
  ])
)(Dashboard)
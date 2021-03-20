import React from 'react'
import Notification from './notifications'
import ProjectList from '../projects/projectlist'

class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard container'>
                <div className='row' >
                    {/* for project list */}
                    <div className='col s12 m6'>
                        <ProjectList/>
                    </div>
                    {/* for notification right*/}
                    <div className='col s15 m5'>
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
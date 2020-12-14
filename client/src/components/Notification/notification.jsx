import React,{useState,useEffect,useRef} from "react"
import '../styles.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import './notification.css'
import axiosCall from '../../ajaxRequest' 
import {navigate} from 'hookrouter'

import CONFIG from '../../config.json';

const Notification = function(props){

    // let arr=["liked","subscribed"];
    const [noti,setNoti]=useState([]);
    useEffect(() => {
        axiosCall('get', `${CONFIG.API_DOMAIN}/Question/getNotifications`)
        .then((res) => {
          if(res.data.err)
            navigate("/")
        
          console.log("notifications",res.data.notifications);
          setNoti(res.data.notifications);
        })
      }, []);
    function handleclick(){
        document.querySelector('.nodisplay').classList.toggle('notis');
    }
    return(
        <div>
        <NotificationsIcon onClick={handleclick} style={{color:"red"}}/>
        <br />
        <div className="nodisplay">
            <h3 style={{paddingBottom:"10px"}}>Notifications</h3>
            {
                noti.length>5?
                noti.slice((noti.length)-5,noti.length).map((el,index) => 
                    <div key={index} className="elem"><div dangerouslySetInnerHTML={{ __html: el }}></div></div>
                )
                :
                noti.length===0?
                <div className="elem"><p>No Notifications Yet</p></div>
                :
                noti.map((el,index) => 
                <div key={index} className="elem"><div dangerouslySetInnerHTML={{ __html: el }}></div></div>
                )
            }
            <a style={{marginRight:"0px"}}>See all Notifications</a>
        </div> 
        </div>
  )
    
}

export default Notification;
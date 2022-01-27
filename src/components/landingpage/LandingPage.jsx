import React from 'react';
import { CSVDownload, CSVLink } from 'react-csv';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Papa from "papaparse";
import { Link } from 'react-router-dom';
import { deleteUser } from '../../store/action/userAction';

const LandingPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.userReducer.user)
  console.log(users)
  const handleDelete = (delItem)=>{
    alert("Are sure you want to delete"+ " " +delItem)
    dispatch(deleteUser(delItem))
  }
  let sampleData = [{
    name: "Oluleye OLufiade",
    email: "oluleyeolufiade@gmail.com",
    title: "Software Dev",
    description: "I have over 4 year experience as frontend developer. Using react, I have over 3 years experience. ",
    status: "Available",
    address: "No 28 Asejere street",
    created_at :"Mon 21 2022"
  }]
  
  return (
    <div className='land_wrapper'>
      <div className='user_container'>Please  
      <CSVLink  data={sampleData}>click here</CSVLink> to download a CSV sample document for bulk upload
      </div>
      
      {
        users.length === 0 ?
      <div className='no_itme_wrapper'>
        <div>
          User list empty, please click create user, to add user
        </div>
      </div> : 

      <div className='user_container'>
        <div className='user_page_top'>
        <h3>{users.length} Users</h3>
        <button><CSVLink data={users}>Download as CSV</CSVLink></button>
        {/* <CSVLink data={users}>Download me</CSVLink>; */}
        </div>
        <div className='card_container'>
          {
            users.map((each,id)=>{
              return(
                <div className='card' key={id}>
                  <div className={each.status === "Available"?"status":"status_not"}>{each.status}</div>
                  <h4 className='card_title'>{each.title}</h4>
                  <div className='card_date'>Mon 21 2022</div>
                  <div className='card_dsc'>{each.description}</div>
                  <div className='name_wrapper'>
                    <div className='name_label'>Full Name</div>
                    <div className='card_name'>{each.name}</div>
                  </div>
                  <div className='cta_wrapper'>
                    <Link to={`/edituser/${each.name}`}>
                      <button className='edit_btn'>Edit</button>
                    </Link>
                    
                      <button className='del_btn' onClick={()=>handleDelete(each.name)}>Delete</button>
                   
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      }
    </div>
  );
};

export default LandingPage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { bulkUpload } from '../../store/action/userAction';

const Navbar = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  console.log(users);
  const handleChangeUploadCsv = (e) => {
    const files = e.target.files;
    console.log(files);
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        complete: function (results) {
          dispatch(bulkUpload(results.data));
        },
      });
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='landing_wrapper'>
      <div className='top_wrapper'>
        <form>
          <input
            className='srch'
            onChange={handleChange}
            type='search'
            placeholder='Search User'
          />
          <button type='submit' className='nav_srch_btn'>
            Search
          </button>
        </form>
        <div>
          <label className='custom-file-upload'>
            <input type='file' onChange={handleChangeUploadCsv} />
            Upload Bulk Users
          </label>

          <Link to='/create_user'>
            <button className='nav_crt_btn'>Create User</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect } from 'react';
import axios from 'axios';
import Credentials from '../Credentials';

function ListReport() {
    const [reports, setReport] = React.useState();

    const tmp = React.useContext(Credentials);
    const token = tmp.replace(/['"]+/g, '');
    const report_id = window.location.search;
    const params = new URLSearchParams();
    params.append("token", token);
    params.append("report_id",report_id);
   
    useEffect(() => {
      fetchreports();
    }, [])
    useEffect(() => {
      console.log(reports)
    }, [reports])
    const fetchreports=async()=>{
        const response=await axios(`/reports/read`, { params});
        setReport(response.data)    
    }
    return (
      <div dangerouslySetInnerHTML={{ __html: {reports} }} />
  );
}
   
export default ListReport;

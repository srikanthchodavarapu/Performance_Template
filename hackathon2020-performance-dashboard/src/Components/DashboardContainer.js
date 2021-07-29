import React, { useEffect, useState } from "react";
import LoadingSpinner from './LoadingSpinner';
import DataTable from './DataTable'
import DashboardHeader from "./DashboardHeader";

const fetch = require('node-fetch');

const DashboardContainer = (props) => {
  const [loadingCondeData, setLoadingCondeData] = useState(true);
  const [loadingCompetitorData, setLoadingCompetitorData] = useState(true);
  const [condeData, setCondeData] = useState([]);
  const [competitorData, setCompetitorData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    console.log('fetching conde data')
    fetch('http://localhost:3001/conde', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => {
        resp.json().then(data => {
          if (!data || (data.statusCode && data.statusCode !== 200)) {
            console.error('Received a bad response from server');
            setLoadingCondeData(false);
            setErrors(['Received a bad response from server']);
            return;
          }

          const mapped = data.map(obj => {
            return { ...obj, isConde: true }
          }
          );
          setCondeData(mapped);
          setLoadingCondeData(false);
        }, (e) => {
          console.error('Failed to parse Readable Stream:', e);
          setLoadingCondeData(false);
          setErrors(errors.concat(e));
        })
      }, (e) => {
        console.log('Failed to fetch:', e);
        setLoadingCondeData(false);
        setErrors(errors.concat(e));
      });
  }, []);

  useEffect(() => {
    console.log('fetching competitors')
    fetch('http://localhost:3001/competitors', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => {
        resp.json().then(data => {
          setCompetitorData(data);
          setLoadingCompetitorData(false);
        }, (e) => {
          console.error('Failed to parse Readable Stream:', e);
          setLoadingCompetitorData(false);
          setErrors(errors.concat(e));
        })
      }, (e) => {
        console.log('Failed to fetch:', e);
        setLoadingCompetitorData(false);
        setErrors(errors.concat(e));
      });
  }, []);

  const ErrorsComponent = ({ errors }) => {
    const ps = errors.map(e => <p style={{ 'color': 'red' }}>{e}</p>)
    return <div>{ps}</div>;
  }

  const componentToRender = (loadingCondeData || loadingCompetitorData)
    ? <LoadingSpinner />
    : (errors.length ? <ErrorsComponent errors={errors} /> : <DataTable data={condeData.concat(competitorData)} />)
  return (
    <div className='dashboard-container'>
      <DashboardHeader />
      {componentToRender}
    </div>
  )
}

export default DashboardContainer;

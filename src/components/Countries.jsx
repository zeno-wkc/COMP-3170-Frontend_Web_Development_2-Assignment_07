import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import styles from './Countries.module.css';

export default function Countries() {
  const DATAURL = 'https://restcountries.com/v3.1/name/kingdom';
  const [status, setStatus] = useState('loading');
  const [countries, setCountries] = useState([]);
  const loading = status === 'loading';
  const error = status === 'error';
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(){
      try {
        setStatus('loading');
        const resp = await fetch(DATAURL);
        const data = await resp.json();
        if (resp.ok) {
          setCountries(data);
          setStatus('success');
        } else {
          setStatus('error');
          console.error('Error response:', data);
        }
      } catch (error) {
        setStatus('error');
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  },[]);

  const handleCountrySelect = (e) => {
    const selectedCountryItem = e.target.value;
    const selectedCountry = countries.find((country) => country.cca2 === selectedCountryItem);
    if (selectedCountryItem && selectedCountry)  navigate(`/countries/${selectedCountryItem}`, { state: { country: selectedCountry } }); 
  };

  const CountriesSelect = () => (          
    <select className={styles.countries_select} onChange={handleCountrySelect}>
      <option value="">Select a Country</option>
      {countries.map((country, index) => ( <option key={index} value={country.cca2}>{country.name.common}</option> ))}
    </select>
  );

  return (
    <>
      <a className={styles.headline} href='/'><h1>World Kingdoms</h1></a>
      <div className="layout">
        {status === 'error' ? ( <p className="error notification">Error loading country data</p>  ) : status === 'loading' ? ( <p className="notification">Loading...</p> ) : (<CountriesSelect />)}
      </div>
      <Outlet />
    </>
  );
}
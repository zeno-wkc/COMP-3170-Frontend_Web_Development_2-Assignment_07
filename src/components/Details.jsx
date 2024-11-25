import { useLocation } from "react-router-dom";
import styles from './Details.module.css';

export default function Details() {
  const { state } = useLocation();
  const { country } = state;
  if (!state || !state.country) return <p>No country selected.</p>;

  return (
    <div className={styles.details_container}>
      <h2>{country.name.common}</h2>
      <img className={styles.flat_img} src={country.flags?.svg || country.flags?.png} alt={`${country.name.common} flag`} />
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Located in:</strong> {country.subregion || "N/A"}</p>
    </div>
  );
}
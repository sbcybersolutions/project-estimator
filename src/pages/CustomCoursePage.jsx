import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './CustomCoursePage.module.css';

export default function CustomCoursePage() {
  const { state } = useLocation();
  const { clientName, projectName, estimateDate } = state || {};

  // Number of Courses
  const [numCourses, setNumCourses] = useState(1);

  // ——— SME ———
  const [smeUnits, setSmeUnits] = useState(0);
  const [smeRate, setSmeRate]   = useState(0);
  const [smeLift, setSmeLift]   = useState(0.1);
  const smeHardCost = useMemo(
    () => Number(smeUnits) * Number(smeRate),
    [smeUnits, smeRate]
  );
  const smeBillRate = useMemo(() => {
    const denom = 1 - Number(smeLift);
    return denom !== 0 ? Number(smeRate) / denom : 0;
  }, [smeRate, smeLift]);
  const smePrice = useMemo(
    () => Number(smeUnits) * smeBillRate,
    [smeUnits, smeBillRate]
  );

  // ——— PM ———
  const [pmUnits, setPmUnits] = useState(0);
  const [pmRate, setPmRate]   = useState(0);
  const [pmLift, setPmLift]   = useState(0.1);
  const pmHardCost = useMemo(
    () => Number(pmUnits) * Number(pmRate),
    [pmUnits, pmRate]
  );
  const pmBillRate = useMemo(() => {
    const denom = 1 - Number(pmLift);
    return denom !== 0 ? Number(pmRate) / denom : 0;
  }, [pmRate, pmLift]);
  const pmPrice = useMemo(
    () => Number(pmUnits) * pmBillRate,
    [pmUnits, pmBillRate]
  );

  // ——— Research & LO ———
  const [resUnits, setResUnits] = useState(0);
  const [resRate, setResRate]   = useState(0);
  const [resLift, setResLift]   = useState(0.1);
  const resHardCost = useMemo(
    () => Number(resUnits) * Number(resRate),
    [resUnits, resRate]
  );
  const resBillRate = useMemo(() => {
    const denom = 1 - Number(resLift);
    return denom !== 0 ? Number(resRate) / denom : 0;
  }, [resRate, resLift]);
  const resPrice = useMemo(
    () => Number(resUnits) * resBillRate,
    [resUnits, resBillRate]
  );

  // ——— Course Writing ———
  const [cwUnits, setCwUnits] = useState(0);
  const [cwRate, setCwRate]   = useState(0);
  const [cwLift, setCwLift]   = useState(0.1);
  const cwHardCost = useMemo(
    () => Number(cwUnits) * Number(cwRate),
    [cwUnits, cwRate]
  );
  const cwBillRate = useMemo(() => {
    const denom = 1 - Number(cwLift);
    return denom !== 0 ? Number(cwRate) / denom : 0;
  }, [cwRate, cwLift]);
  const cwPrice = useMemo(
    () => Number(cwUnits) * cwBillRate,
    [cwUnits, cwBillRate]
  );

  // ——— Graphic Design ———
  const [gdUnits, setGdUnits] = useState(0);
  const [gdRate, setGdRate]   = useState(0);
  const [gdLift, setGdLift]   = useState(0.1);
  const gdHardCost = useMemo(
    () => Number(gdUnits) * Number(gdRate),
    [gdUnits, gdRate]
  );
  const gdBillRate = useMemo(() => {
    const denom = 1 - Number(gdLift);
    return denom !== 0 ? Number(gdRate) / denom : 0;
  }, [gdRate, gdLift]);
  const gdPrice = useMemo(
    () => Number(gdUnits) * gdBillRate,
    [gdUnits, gdBillRate]
  );

  // ——— Translation ———
  const [trUnits, setTrUnits] = useState(0);
  const [trRate, setTrRate]   = useState(0);
  const [trLift, setTrLift]   = useState(0.1);
  const trHardCost = useMemo(
    () => Number(trUnits) * Number(trRate),
    [trUnits, trRate]
  );
  const trBillRate = useMemo(() => {
    const denom = 1 - Number(trLift);
    return denom !== 0 ? Number(trRate) / denom : 0;
  }, [trRate, trLift]);
  const trPrice = useMemo(
    () => Number(trUnits) * trBillRate,
    [trUnits, trBillRate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting custom course estimate...');
    // TODO: save values & navigate onward
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>
          ← Back to Estimate Form
        </Link>
      </header>

      <h2 className={styles.title}>Custom Course Estimate</h2>
      <p className={styles.subtitle}>
        For <strong>{clientName}</strong> / <em>{projectName}</em> on {estimateDate}
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Number of Courses */}
        <div className={styles.inlineField}>
          <label htmlFor="numCourses">Number of Courses</label>
          <input
            id="numCourses"
            type="number"
            value={numCourses}
            onChange={e => setNumCourses(e.target.value)}
            min="1"
            required
            className={styles.input}
          />
        </div>

        {/* Header row */}
        <div className={`${styles.grid} ${styles.gridHeader}`}>
          <div /> {/* empty corner */}
          <div>Hours/Units</div>
          <div>Rate</div>
          <div>Hard Cost</div>
          <div>Lift</div>
          <div>Bill Rate</div>
          <div>Price</div>
        </div>

        {/* SME Row */}
        <div className={styles.grid}>
          <div className={styles.labelCell}>SME</div>
          <input
            type="number"
            value={smeUnits}
            onChange={e => setSmeUnits(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={smeRate}
            onChange={e => setSmeRate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={smeHardCost.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={smeLift}
            onChange={e => setSmeLift(e.target.value)}
            step="0.01"
            required
            className={styles.input}
          />
          <input
            type="number"
            value={smeBillRate.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={smePrice.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
        </div>

        {/* PM Row */}
        <div className={styles.grid}>
          <div className={styles.labelCell}>PM</div>
          <input
            type="number"
            value={pmUnits}
            onChange={e => setPmUnits(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={pmRate}
            onChange={e => setPmRate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={pmHardCost.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={pmLift}
            onChange={e => setPmLift(e.target.value)}
            step="0.01"
            required
            className={styles.input}
          />
          <input
            type="number"
            value={pmBillRate.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={pmPrice.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
        </div>

        {/* Research & LO Row */}
        <div className={styles.grid}>
          <div className={styles.labelCell}>Research &amp; LO</div>
          <input
            type="number"
            value={resUnits}
            onChange={e => setResUnits(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={resRate}
            onChange={e => setResRate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={resHardCost.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={resLift}
            onChange={e => setResLift(e.target.value)}
            step="0.01"
            required
            className={styles.input}
          />
          <input
            type="number"
            value={resBillRate.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={resPrice.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
        </div>

        {/* Course Writing Row */}
        <div className={styles.grid}>
          <div className={styles.labelCell}>Course Writing</div>
          <input
            type="number"
            value={cwUnits}
            onChange={e => setCwUnits(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={cwRate}
            onChange={e => setCwRate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={cwHardCost.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={cwLift}
            onChange={e => setCwLift(e.target.value)}
            step="0.01"
            required
            className={styles.input}
          />
          <input
            type="number"
            value={cwBillRate.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={cwPrice.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
        </div>

        {/* Graphic Design Row */}
        <div className={styles.grid}>
          <div className={styles.labelCell}>Graphic Design</div>
          <input
            type="number"
            value={gdUnits}
            onChange={e => setGdUnits(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={gdRate}
            onChange={e => setGdRate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={gdHardCost.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={gdLift}
            onChange={e => setGdLift(e.target.value)}
            step="0.01"
            required
            className={styles.input}
          />
          <input
            type="number"
            value={gdBillRate.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={gdPrice.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
        </div>

        {/* Translation Row */}
        <div className={styles.grid}>
          <div className={styles.labelCell}>Translation</div>
          <input
            type="number"
            value={trUnits}
            onChange={e => setTrUnits(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={trRate}
            onChange={e => setTrRate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="number"
            value={trHardCost.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={trLift}
            onChange={e => setTrLift(e.target.value)}
            step="0.01"
            required
            className={styles.input}
          />
          <input
            type="number"
            value={trBillRate.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
          <input
            type="number"
            value={trPrice.toFixed(2)}
            readOnly
            className={`${styles.input} ${styles.readOnly}`}
          />
        </div>

        <button type="submit" className={styles.continue}>
          Continue
        </button>
      </form>
    </div>
  );
}
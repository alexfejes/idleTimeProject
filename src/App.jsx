import { useState } from 'react'
// FIX 2: Import the hook.
// import useIdleTimer from './hooks/useIdleTimer'
import './App.css'

// FIX 3: How long the mouse can stay still before the screen blurs (10 seconds).
const IDLE_TIMEOUT_MS = 10000

const transactions = [
  { id: 1, label: 'Payroll deposit', date: 'Nov 01', amount: 4820.0 },
  { id: 2, label: 'Rent — Maple St.', date: 'Oct 31', amount: -1950.0 },
  { id: 3, label: 'Grocery Mart', date: 'Oct 30', amount: -134.62 },
  { id: 4, label: 'Transfer to Savings', date: 'Oct 29', amount: -500.0 },
  { id: 5, label: 'Coffee Corner', date: 'Oct 29', amount: -6.75 },
]

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function App() {
  const [twoFactor, setTwoFactor] = useState(true)
  const [alerts, setAlerts] = useState(false)
  // FIX 4: Use the hook.
  // const isIdle = useIdleTimer(IDLE_TIMEOUT_MS)

  return (
    <>
      {/* FIX 5: Swap the <main> line below for this one to blur when idle:
      <main className={`dashboard ${isIdle ? 'is-blurred' : ''}`}> */}
      <main className="dashboard">
        <header className="topbar">
          <h1>Northwind Banking</h1>
          <span className="user">Signed in as J. Rivera</span>
        </header>

        <section className="cards">
          <article className="card balance">
            <h2>Checking balance</h2>
            <p className="amount">{currency.format(48213.57)}</p>
            <p className="muted">Account •••• 4821 · Routing 021000021</p>
          </article>
          <article className="card">
            <h2>Savings</h2>
            <p className="amount">{currency.format(120540.0)}</p>
            <p className="muted">Account •••• 9930</p>
          </article>
          <article className="card">
            <h2>Credit card</h2>
            <p className="amount">{currency.format(2311.08)}</p>
            <p className="muted">Card 4532 7781 0042 1176 · exp 09/29</p>
          </article>
        </section>

        <section className="panels">
          <article className="card">
            <h2>Recent transactions</h2>
            <ul className="tx">
              {transactions.map((tx) => (
                <li key={tx.id}>
                  <span>
                    {tx.label}
                    <small>{tx.date}</small>
                  </span>
                  <span className={tx.amount < 0 ? 'debit' : 'credit'}>
                    {currency.format(tx.amount)}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card settings">
            <h2>Sensitive settings</h2>
            <label>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
              />
              Two-factor authentication
            </label>
            <label>
              <input
                type="checkbox"
                checked={alerts}
                onChange={(e) => setAlerts(e.target.checked)}
              />
              Large-withdrawal alerts
            </label>
            <div className="field">
              <span>API key</span>
              <code>sk_live_51Hx9QeLmZ2vT8rK3pW</code>
            </div>
            <div className="field">
              <span>Recovery email</span>
              <code>j.rivera@example.com</code>
            </div>
          </article>
        </section>
      </main>

      {/* FIX 6: Show the "Session Paused" message when idle.
      {isIdle && <div className="idle-overlay">Session Paused</div>}
      */}
    </>
  )
}

export default App

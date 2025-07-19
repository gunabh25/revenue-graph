import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Cell, ReferenceLine, AreaChart, Area,
  CartesianGrid
} from "recharts";
import "./App.css";

const revenueData = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 100 },
  { month: "Apr", value: 130 },
  { month: "May", value: 110 },
  { month: "Jun", value: 179 },
  { month: "Jul", value: 90 },
  { month: "Aug", value: 140 },
  { month: "Sep", value: 70 },
  { month: "Oct", value: 120 },
  { month: "Nov", value: 90 },
  { month: "Dec", value: 110 },
];

const userData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1300 },
  { month: "Mar", users: 5100 },
  { month: "Apr", users: 600 },
  { month: "May", users: 5400 },
  { month: "Jun", users: 400 },
  { month: "Jul", users: 8000 },
  { month: "Aug", users: 2200 },
  { month: "Sep", users: 8900 },
  { month: "Oct", users: 2400 },
  { month: "Nov", users: 10000 },
  { month: "Dec", users: 10000 },
];

function App() {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        {/* Revenue Card */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">Total Monthly Revenue</span>
            <span className="card-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="8" width="3" height="7" fill="#222169ff" rx="1"/>
                <rect x="6" y="4" width="3" height="11" fill="#222169ff" rx="1"/>
                <rect x="11" y="10" width="3" height="5" fill="#222169ff" rx="1"/>
              </svg>
            </span>
          </div>
          <div className="revenue-amount">$682.5</div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={revenueData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <ReferenceLine 
                  y={179} 
                  stroke="#222169ff" 
                  strokeDasharray="5 5" 
                  strokeWidth={2}
                  label={{ value: "$179", position: "insideRight", fill: "#222169ff", fontSize: 12, fontWeight: "bold", offset: 10 }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {revenueData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.month === "Jun" ? "#222169ff" : "#cdcdceff"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="header-content">
            <span className="card-title">User Information</span>
            <span className="card-status">
              <svg width="12" height="12" viewBox="0 0 12 12" style={{marginRight: "4px"}}>
                <circle cx="6" cy="6" r="6" fill="#10B981"/>
                <path d="M3.5 6L5.5 8L8.5 4.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              On track
            </span>
            </div>
            <span className="card-period">Monthly</span>
          </div>


          <div className="stats-row">
            <div className="stat-card stat-card-main" style={{height: "65px", padding: "4px 2px", width:"200px"}}>
              {/* <div className="stat-label">New User Registration</div> */}
              <div className="cardTitle">New User Registration</div>
              <div className="cardDetails">
              <div className="stat-value">4,350</div>
              <div className="stat-change positive">+2.45%</div>
              </div>
            </div>
            <div className="stat-card" style={{height: "65px", padding: "4px 2px", width:"200px"}}>
              <div className="cardTitle">New Partner Registration</div>
              <div className="cardDetails">
              <div className="stat-value">102</div>
              <div className="stat-change positive">+2.45%</div>
              </div>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={120}>
              <AreaChart data={userData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#e0e7ff" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorUsers)"
                  connectNulls={true}
                />
              </AreaChart>
            </ResponsiveContainer>
            


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import { SKILLS } from "../Data/constant.jsx";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import "../index.css";

const Skills = () => {
  const data = SKILLS.map((s) => ({ name: s.name, level: s.level }));

  const colors = [
    "#2563eb", "#4f46e5", "#7c3aed", "#db2777",
    "#dc2626", "#ea580c", "#ca8a04", "#16a34a",
    "#0d9488", "#0891b2", "#0284c7"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Heading */}
        <div className="skills-header">
          <p className="subtitle">Tech Stack</p>
          <h2 className="title">Skills & Proficiency</h2>
        </div>

        <div className="skills-grid">

          {/* Chart */}
          <div className="chart-box">
            <h3>Competency Overview</h3>
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={100}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Bar dataKey="level" barSize={18} radius={[0, 8, 8, 0]}>
                    {data.map((_, index) => (
                      <Cell key={index} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Categories */}
          <div className="skills-right">
            <div className="skill-cards">
              {["Frontend", "Backend", "Languages", "Tools"].map((cat) => (
                <div key={cat} className="skill-card">
                  <h4>{cat}</h4>
                  <ul>
                    {SKILLS.filter(
                      (s) => s.category === (cat === "Languages" ? "Language" : cat)
                    ).map((skill) => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="learning-box">
              <h3>Continuously Expanding</h3>
              <p>
                Currently learning React state management (Redux) and backend
                systems using Java and MongoDB.
              </p>
              <div className="tags">
                <span>Next: Java</span>
                <span>Next: API</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

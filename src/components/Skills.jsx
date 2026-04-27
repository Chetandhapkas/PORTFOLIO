import React, { useEffect, useRef, useState } from "react";
import { SKILLS } from "../Data/constant.jsx";
import "../index.css";

const Skills = () => {
  const elementsRef = useRef([]);
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set()); // 🔥 FIX: track visibility in state

  // 🔥 Scroll animation - now updates React state instead of directly touching classList
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elementsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index])); // 🔥 add to state
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Click outside reset
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className="container">

        {/* Heading */}
        <div className="skills-header">
          <p className="subtitle">Tech Stack</p>
          <h2 className="title">Skills & Expertise</h2>
        </div>

        <div className="skills-grid">

          {/* LEFT SIDE */}
          <div className="skills-left">
            <div className="skills-card-grid">
              {SKILLS.map((skill, index) => {
                const isHighlight = activeCategory && skill.category === activeCategory;
                const isDim = activeCategory && skill.category !== activeCategory;
                const isVisible = visibleItems.has(index); // 🔥 from state

                return (
                  <div
                    key={skill.name}
                    ref={(el) => (elementsRef.current[index] = el)}
                    className={[
                      "skill-card-new",
                      isVisible ? "show" : "",       // 🔥 controlled by state
                      isHighlight ? "highlight" : "",
                      isDim ? "dim" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <h3>{skill.name}</h3>
                    <span className="tag">{skill.category}</span>
                    <p>{skill.desc1}</p>
                    <p className="light-text">{skill.desc2}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="skills-right">
            <div className="skill-cards">
              {["Frontend", "Backend", "Languages", "Tools"].map((cat, i) => {
                const realCategory = cat === "Languages" ? "Language" : cat;
                const cardIndex = SKILLS.length + i;
                const isVisible = visibleItems.has(cardIndex); // 🔥 from state

                return (
                  <div
                    key={cat}
                    ref={(el) => (elementsRef.current[cardIndex] = el)}
                    className={[
                      "skill-card",
                      isVisible ? "show" : "",       // 🔥 controlled by state
                      activeCategory === realCategory ? "active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCategory(
                        activeCategory === realCategory ? null : realCategory
                      );
                    }}
                  >
                    <h4>{cat}</h4>
                    <ul>
                      {SKILLS.filter((s) => s.category === realCategory).map((skill) => (
                        <li key={skill.name}>{skill.name}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Learning Box */}
            {(() => {
              const lbIndex = SKILLS.length + 4;
              const isVisible = visibleItems.has(lbIndex); // 🔥 from state
              return (
                <div
                  ref={(el) => (elementsRef.current[lbIndex] = el)}
                  className={["learning-box", isVisible ? "show" : ""].filter(Boolean).join(" ")}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCategory(null);
                  }}
                >
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
              );
            })()}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
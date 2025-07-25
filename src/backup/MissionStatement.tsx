import React, { ReactElement, useEffect } from 'react';
import type { FC } from 'react';
import { FaBullseye, FaHardHat, FaCogs, FaShieldAlt, FaTools } from 'react-icons/fa';
import styles from './MissionStatement.module.css';

interface OrbitIcon {
  icon: ReactElement;
  angle: number;
  key: number;
}

const MissionStatement: FC = () => {
  // Icon positions on circle (degrees)
  const icons: OrbitIcon[] = [
    { icon: <FaBullseye />, angle: 0, key: 1 },
    { icon: <FaHardHat />, angle: 72, key: 2 },
    { icon: <FaCogs />, angle: 144, key: 3 },
    { icon: <FaShieldAlt />, angle: 216, key: 4 },
    { icon: <FaTools />, angle: 288, key: 5 },
  ];

  // Calculate position with radius 110px
  const radius = 110;

  useEffect(() => {
    // Add animation styles on component mount
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      // Clean up on unmount
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="mission"
      className="relative py-24 bg-gradient-to-br from-white to-gray-100 overflow-hidden flex justify-center items-center"
    >
      {/* Rotating orbit container */}
      <div
        className={styles.orbitContainer}
        aria-hidden="true"
      >
        {icons.map(({ icon, angle, key }) => {
          // Convert angle to radians
          const rad = (angle * Math.PI) / 180;

          // Calculate x, y position relative to center
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div
              key={key}
              className={styles.icon}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>

      {/* Main text content sits above icons */}
      <div className={styles.content}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-platchem-navy font-inter mb-4">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-platchem-gray leading-relaxed font-light">
          Delivering{" "}
          <span className="text-platchem-navy font-semibold">smart</span> and{" "}
          <span className="text-platchem-navy font-semibold">dependable</span>{" "}
          mining and engineering solutions, built on{" "}
          <span className="underline underline-offset-4 decoration-platchem-navy">
            quality
          </span>
          ,{" "}
          <span className="underline underline-offset-4 decoration-platchem-navy">
            safety
          </span>
          , and{" "}
          <span className="underline underline-offset-4 decoration-platchem-navy">
            service
          </span>{" "}
          that consistently exceeds expectations.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;

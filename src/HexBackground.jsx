import { useEffect, useState } from "react";
import "./HexBackground.css";

export default function HexBackground() {
  const [hexGrid, setHexGrid] = useState([]);

  // CONFIGURATION
  const hexWidth = 240.5;   // big hex width
  const hexHeight = 270;    // proportional height
  const gap = 2;            // tiny gap between hexes

  const horizontalSpacing = hexWidth + gap;
  const verticalSpacing = hexHeight * 0.75 + gap;

  // GENERATE GRID
  useEffect(() => {
    const updateGrid = () => {
      const countY = Math.ceil(window.innerHeight / verticalSpacing) + 1; // extra row
      const countX = Math.ceil(window.innerWidth / horizontalSpacing) + 1; // extra column

      const grid = [];
      for (let i = 0; i < countY; i++) {
        for (let j = 0; j < countX; j++) {
          grid.push({ i, j });
        }
      }
      setHexGrid(grid);
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return (
    <div className="hex-wrapper">
      {/* subtle animated gradient behind hexes */}
      <div className="animated-background" />

      {/* hex grid */}
      {hexGrid.map(({ i, j }, index) => {
        // stagger odd rows by half of horizontal spacing
        const offsetX = i % 2 === 0 ? 0 : horizontalSpacing / 2;

        // shift everything slightly left/up to fill edges
        const left = j * horizontalSpacing + offsetX - horizontalSpacing / 2;
        const top = i * verticalSpacing - verticalSpacing / 2;

        return (
          <div
            key={index}
            className="hex-cell"
            style={{
              top: `${top}px`,
              left: `${left}px`,
              width: `${hexWidth}px`,
              height: `${hexHeight}px`,
            }}
          />
        );
      })}
    </div>
  );
}

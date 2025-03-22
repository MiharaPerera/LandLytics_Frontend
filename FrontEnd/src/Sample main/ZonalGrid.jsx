import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SAMPLE_REG_MAIN.module.css";
import ZonalCard from "./ZonalCard";

function ZonalGrid() {
  const navigate = useNavigate();

  const largeTwoColumnZonalData = [
    {
      id: 1,
      name: "COLOMBO",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/46c4e237c9f4f59aeeca58abd5c22f3a474ed959e189a5ee0deeccc98faa9c00?placeholderIfAbsent=true",
      className: styles.colombozonal,
      containerClassName: styles.div5,
      nameClassName: styles.colombo,
      zonalClassName: styles.zonal,
      columnClassName: styles.column3,
    },
    {
      id: 2,
      name: "KALUTARA",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/01324cf823639ebdf31825faa7cf5ae913b7eb5e5b34e25f09b6dc201f190b58?placeholderIfAbsent=true",
      className: styles.kalutarazonal,
      containerClassName: styles.div6,
      nameClassName: styles.kalutara,
      zonalClassName: styles.zonal,
      columnClassName: styles.column4,
    },
  ];

  const smallTwoColumnZonalData = [
    {
      id: 3,
      name: "JAFFNA",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/8f29742b5fb5d48c7723f57d2346240837eba2cbeb1a9e7c52e141a0a4cce1c2?placeholderIfAbsent=true",
      className: styles.jaffnazonal,
      containerClassName: styles.div8,
      nameClassName: styles.jaffna,
      zonalClassName: styles.zonal2,
    },
    {
      id: 4,
      name: "BADULLA",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/08f240c5fd0082ab405c2e6c1b50e067d954b22336fda08ba341b8feedf1f4d3?placeholderIfAbsent=true",
      className: styles.badullazonal,
      containerClassName: styles.div9,
      nameClassName: styles.badulla,
      zonalClassName: styles.zonal3,
    },
  ];

  const additionalZonalData = [
    {
      id: 5,
      name: "GALLE",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/8f29742b5fb5d48c7723f57d2346240837eba2cbeb1a9e7c52e141a0a4cce1c2?placeholderIfAbsent=true",
      className: styles.gallezonal,
      containerClassName: styles.div10,
      nameClassName: styles.galle,
      zonalClassName: styles.zonal4,
    },
    {
      id: 6,
      name: "CENTRAL PLANES",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/01324cf823639ebdf31825faa7cf5ae913b7eb5e5b34e25f09b6dc201f190b58?placeholderIfAbsent=true",
      className: styles.centralzonal,
      containerClassName: styles.div11,
      nameClassName: styles.central,
      zonalClassName: styles.zonal5,
    },
  ];

  const handleZonalCardClick = (zonalName) => {
    // Navigate to a specific zonal page or show details
    navigate(`/zonal/${zonalName.toLowerCase()}`);
  };

  return (
    <>
      {/* First row - large cards */}
      <div className={styles.div4}>
        <div className={styles.div}>
          {largeTwoColumnZonalData.map((zonal) => (
            <div key={zonal.id} className={zonal.columnClassName}>
              <ZonalCard
                name={zonal.name}
                imageUrl={zonal.imageUrl}
                className={zonal.className}
                containerClassName={zonal.containerClassName}
                nameClassName={zonal.nameClassName}
                zonalClassName={zonal.zonalClassName}
                onClick={() => handleZonalCardClick(zonal.name)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row - small cards */}
      <div className={styles.div7}>
        {smallTwoColumnZonalData.map((zonal) => (
          <ZonalCard
            key={zonal.id}
            name={zonal.name}
            imageUrl={zonal.imageUrl}
            className={zonal.className}
            containerClassName={zonal.containerClassName}
            nameClassName={zonal.nameClassName}
            zonalClassName={zonal.zonalClassName}
            isSmall={true}
            onClick={() => handleZonalCardClick(zonal.name)}
          />
        ))}
      </div>

      {/* Third row - additional cards */}
      <div className={styles.div7}>
        {additionalZonalData.map((zonal) => (
          <ZonalCard
            key={zonal.id}
            name={zonal.name}
            imageUrl={zonal.imageUrl}
            className={zonal.className}
            containerClassName={zonal.containerClassName}
            nameClassName={zonal.nameClassName}
            zonalClassName={zonal.zonalClassName}
            isSmall={true}
            onClick={() => handleZonalCardClick(zonal.name)}
          />
        ))}
      </div>
    </>
  );
}

export default ZonalGrid;
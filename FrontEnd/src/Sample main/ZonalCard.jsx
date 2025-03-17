import React from "react";

function ZonalCard({
  name,
  imageUrl,
  className,
  containerClassName,
  nameClassName,
  zonalClassName,
  isSmall = false,
}) {
  return (
    <article className={className}>
      <div className={containerClassName}>
        <img
          src={imageUrl}
          alt={`${name} zone`}
          className={isSmall ? "img6" : "img4"}
        />
        <h3 className={nameClassName}>
          {name}
          <br />
        </h3>
        <p className={zonalClassName}>ZONAL</p>
      </div>
    </article>
  );
}

export default ZonalCard;
import React, { useState, useEffect } from "react";
import styles from "./scroll-move.module.css"

type ScrollProp = Readonly<{
  children: React.ReactNode;
  className?: string;
  classNameChild?: string;
  minIndex?: number;
  dataSpeed?: string;
}>;

export function ScrollMove({ children, minIndex = 8, className = "", classNameChild = "", dataSpeed = "fast", ...prop }: ScrollProp) {
  const childrenArray = React.Children.toArray(children);
  const repeatCount = Math.ceil(minIndex / childrenArray.length);
  const extendedChildren = [
    ...childrenArray.slice(-Math.min(minIndex - 1, childrenArray.length)),
    ...Array.from({ length: repeatCount }).flatMap(() => childrenArray),
  ];
  return (
    <div className={`${styles.scroller} ${className}`} data-animated="true" data-speed={dataSpeed}>
      <ul className={`${styles.scroller__inner} ${classNameChild}`}>
        {
          extendedChildren.map((child, index) => (
            <li key={`${index}`}>
              {child}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
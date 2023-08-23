/*
 * @Date 2023-08-24 00:00:17
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-08-24 00:13:58
 * @FilePath /RSSHub/website/src/components/Open.tsx
 * Copyright (c) 2023 by Zero, All Rights Reserved.
 */
import React from "react";

export default function Open({ href }): JSX.Element {
  return (
      <div>
        <a href={href}>
          <button style={{
            backgroundColor: "#ffb74d",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: 5,
            fontSize: 16,
            cursor: "pointer"
          }}>在腕上RSS中打开</button>
        </a>
    </div>
  )
}

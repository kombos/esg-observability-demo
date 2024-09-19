import React, { useState } from "react";

interface Props {
  summary: any;
  children: JSX.Element;
  openByDefault: boolean;
}

export default function Revealer({ summary = "", children = <></>, openByDefault = false }: Props) {
  const [State, setState] = useState(openByDefault);
  return (
    <div className="am-esg-revealer">
      <div className="title" role="button" onClick={() => setState((e) => !e)} tabIndex={0}>
        {summary} <i className={`${State ? "active" : ""}`} />
      </div>
      <div className={`body ${State ? "active" : ""}`}>{children}</div>
    </div>
  );
}

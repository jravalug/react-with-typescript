import { useState } from "react";

export function Alert({
  type = 'information', 
  heading, 
  children
}) {
  const [visible, setVisible] = useState(false)

  if (!visible) {
    return null
  }

  return (
    <div>
      <div>
        <span 
          role="img" 
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >{ type === 'warning' ? '⚠' : 'ℹ️' }️</span>
        <span>{ heading }</span>
      </div>
      <div>{ children }</div>
    </div>
  );
}
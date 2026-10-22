// Interaction patterns adapted from Amicro under the MIT License.
// See THIRD_PARTY_NOTICES.md for the source revision and full notice.

import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type MicroLinkProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  icon: string;
  strength?: number;
};

export function MicroLink({
  children,
  className = "",
  icon,
  strength = 0.1,
  ...props
}: MicroLinkProps) {
  return (
    <a
      {...props}
      className={`${className} micro-link`}
      data-magnetic
      data-magnetic-strength={strength}
    >
      <span className="micro-link-content">
        <span>{children}</span>
        <span className="micro-icon-window" aria-hidden="true">
          <span className="micro-icon-track">
            <span>{icon}</span>
            <span>{icon}</span>
          </span>
        </span>
      </span>
    </a>
  );
}

export function SignalPulse() {
  return (
    <span className="signal-pulse" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

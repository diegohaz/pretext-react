import React from "react";
import { useAppSelector } from "../app/hooks";
import { nextPrevParentSelector } from "../features/nav/navSlice";
import { InternalAnchor } from "./links";

export function PageFooter() {
    const navTargets = useAppSelector(nextPrevParentSelector);

    return (
        <div className="ptx-content-footer">
            <InternalAnchor
                href={navTargets.prev?.href || "#"}
                className="previous-button button"
                title={
                    navTargets.prev
                        ? `Previous (${navTargets.prev.title})`
                        : "Previous"
                }
            >
                <span className="icon">&lt;</span>
                <span className="name">Prev</span>
            </InternalAnchor>
            <InternalAnchor
                href={"#"}
                title={"Top"}
                className="top-button button"
            >
                <span className="icon">^</span>
                <span className="name">Top</span>
            </InternalAnchor>
            <InternalAnchor
                href={navTargets.next?.href || "#"}
                title={
                    navTargets.next ? `Next (${navTargets.next.title})` : "Next"
                }
                className="next-button button"
            >
                <span className="name">Next</span>
                <span className="icon">&gt;</span>
            </InternalAnchor>
        </div>
    );
}

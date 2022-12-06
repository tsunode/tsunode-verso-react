import { useEffect, useRef } from "react";
import { IInfiniteScrollProps } from "./types";

export const InfiniteScroll = ({ callback, hasNextPage }: IInfiniteScrollProps) => {
    const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!hasNextPage) {
            return;
        }

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const { intersectionRatio: ratio } = entry;

            if(ratio > 0) {
                callback();
            }
        }, { rootMargin: '5px'});

        if(divInfiniteScrollRef.current) {
            intersectionObserver.observe(divInfiniteScrollRef.current)
        }

        return () => {
            if(divInfiniteScrollRef.current) {
                intersectionObserver.unobserve(divInfiniteScrollRef.current)
            }
        }
    }, [divInfiniteScrollRef, hasNextPage])

    return <div ref={divInfiniteScrollRef} />
}
import { useEffect, useRef } from "react";

export const InfiniteScroll = ({ callback }) => {
    const divInfiniteScrollRef = useRef(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const { intersectionRatio: ratio } = entry;

            if(ratio > 0 ) {
                callback();
            }
        }, { rootMargin: '5px'});

        if(divInfiniteScrollRef.current) {
            intersectionObserver.observe(divInfiniteScrollRef.current)
        }

        return () => {
            intersectionObserver.disconnect();
        }
    }, [divInfiniteScrollRef])

    return <div ref={divInfiniteScrollRef} />
}
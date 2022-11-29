import { useEffect, useRef } from "react";

interface IInfiniteScrollProps {
    callback: () => void
    hasNextPage: boolean;
}

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
            console.log('desconect scroll')
            if(divInfiniteScrollRef.current) {
                intersectionObserver.unobserve(divInfiniteScrollRef.current);
            }
        }
    }, [divInfiniteScrollRef, hasNextPage])

    return <div ref={divInfiniteScrollRef} />
}
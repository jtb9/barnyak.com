import { SVG } from '@svgdotjs/svg.js';
import { useEffect, useRef } from 'react';

export default function CircleBackdrop() {
    const numCircles = 70;
    const minRadius = 5;
    const maxRadius = 10;
    const colors = ['#FFE066', '#F4F1BB', '#E8D6CB', '#D3F9B5'];

    const svgRef = useRef(null);

    useEffect(() => {
        //@ts-ignore
        const draw = SVG().addTo(svgRef.current).size('100%', '100%');

        const generateCircles = () => {
            for (let i = 0; i < numCircles; i++) {
                const radius = Math.random() * (maxRadius - minRadius) + minRadius;
                const cx = Math.random() * 100;
                const cy = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                draw.circle(radius * 2)
                    //@ts-ignore
                    .cx(`${cx}%`)
                    //@ts-ignore
                    .cy(`${cy}%`)
                    .fill(color)
                    .opacity(Math.random());
            }
        };

        generateCircles();
    }, [numCircles, minRadius, maxRadius, colors]);

    return (
        <div ref={svgRef} style={{ position: 'static', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
    );
}

import React, { useRef, useEffect } from 'react';

export const CanvasPieChart = ({ data, colors, labels }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Get the canvas context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // Clear the entire canvas to start fresh
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Setup for the pie chart
        let total = data.reduce((sum, value) => sum + value, 0);
        let startAngle = 0;
        const radius = canvas.height / 4; // Pie radius is 1/4 the height of the canvas
        const centerX = radius + 20; // Center the pie on the left part of the canvas
        const centerY = radius + 20;

        // Draw the pie slices
        data.forEach((value, index) => {
            // Calculate the end angle of the slice
            let sliceAngle = (value / total) * 2 * Math.PI;
            // Set the color for the current slice
            ctx.fillStyle = colors[index];
            // Start a new path for the slice
            ctx.beginPath();
            // Move to the center of the pie
            ctx.moveTo(centerX, centerY);
            // Draw the arc for the slice
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
            // Close the path and fill the slice
            ctx.closePath();
            ctx.fill();
            // Update the start angle for the next slice
            startAngle += sliceAngle;
        });

        // Setup for the legend
        let legendY = 20; // Start position for the legend on the canvas
        const legendX = 2 * radius + 40; // Position the legend to the right of the pie

        // Draw the legend
        labels.forEach((label, index) => {
            const legendColor = colors[index];
            // Draw the color box for the legend
            ctx.fillStyle = legendColor;
            ctx.fillRect(legendX, legendY, 20, 20); // Draw the legend color box
            // Set the text style for the legend
            ctx.fillStyle = '#000';
            ctx.font = '16px Arial';
            // Draw the label text beside the color box
            ctx.fillText(label, legendX + 25, legendY + 15);
            // Update the Y position for the next legend item
            legendY += 30;
        });
    }, [data, colors, labels]); // Redraw when data, colors, or labels change

    return <canvas ref={canvasRef} width={600} height={600} />;
};

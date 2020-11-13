import React from 'react'
import LineChart from 'react-svg-line-chart'

const DrawGraphics = ({dataToDraw}) => {
    const coordinateData= dataToDraw && dataToDraw.map((el,i) => ({
        x:i,y:el
    }))
    return(
        <div>
        <p>Time</p>
        <LineChart
            data={coordinateData || []}
        />
        <p>Count</p>
        </div>
    )
}

export default DrawGraphics;
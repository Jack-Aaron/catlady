import React from 'react'
import "./chart.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Line} from "react-chartjs-2"



function Chart( { currentPet } ) {

    function formatDate(date) {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        };  
        return new Date(date).toLocaleDateString(options);
      }

    const day = currentPet.day.map(day => formatDate(day))
    const weight = currentPet.currentWeight
    
    const data = {
        labels: day,

        datasets: [
            {
                label: "Weight Tracking",
                data: weight,
                borderColor:["rgba(229, 152, 155, 1)"],
                backgroundColor:["rgba(229, 152, 155, 1)"],
                pointBackgroundColor: "rgba(229, 152, 155, 1)",
                pointBorderColor: "rgba(229, 152, 155, 1)",
            }
        ]
    }
    return (
        <Row className="chartRow">
            <Col className="chartRow">
                <Line data={data} />
            </Col>
        </Row>

    )
}

export default Chart
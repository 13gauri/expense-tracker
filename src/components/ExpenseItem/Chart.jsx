import "./Chart.css"; 
import ChartBar from "./ChartBar";

const Chart = (props) => {

    // console.log("inside chart.js");
    // console.log(props.dataPoints);

    let priceArray = props.dataPoints.map(row => row.price)
    // console.log(...priceArray);

    let maxPrice = Math.max(...priceArray);
    // console.log(maxPrice);

  return (
      <div className="chart">
           { 
             props.dataPoints.map((record) => {
                 return (
                    <ChartBar  label={record.label} value={record.price} maxValue={maxPrice}/>
                 )

             })

           }
         
          {/* <ChartBar  label="feb" value={294} maxValue={799}/>
          <ChartBar  label="jan" value={450} maxValue={799}/>  */}
      </div>
  )
}

export default Chart;
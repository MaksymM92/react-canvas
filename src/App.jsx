import { CanvasBarChart } from "./components/CanvasBarChart/CanvasBarChart.jsx";
import { CanvasPieChart } from "./components/CanvasPieChart/CanvasPieChart.jsx";
import './App.css'

function App() {
    const barData = [100, 200, 150, 250, 300]; // Sample data
    const barLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']; // Sample labels

    const pieData = [300, 150, 100, 200]; // Sample data for pie chart
    const pieColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']; // Sample colors for pie chart
    const pieLabels = ['Category A', 'Category B', 'Category C', 'Category D']; // Example labels

    return (
        <div className="App">
            <div className="chart">
                <CanvasBarChart data={barData} labels={barLabels} />
            </div>
            <div className="chart">
                <CanvasPieChart data={pieData} colors={pieColors} labels={pieLabels} />
            </div>
        </div>
    );
}

export default App

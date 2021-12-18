// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
// import ShipmentOverview from "./pages/ShipmentOverview";
// import NotificationsCard from "./components/NotificationsCard/NotificationsCard";
// import FreightCard from "./components/FreightCard/FreightCard";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      {/* <Layout>
          <div className="cardsRow">
            <NotificationsCard />
            <FreightCard />
          </div>
        </Layout> */}
      {/* <Dashboard /> */}
      {/* <ShipmentOverview /> */}
    </div>
  );
}

export default App;

import Layout from "../components/Layout/Layout";
import NotificationsCard from "../components/NotificationsCard/NotificationsCard";
import FreightCard from "../components/FreightCard/FreightCard";
import ActiveShipmentsCard from "../components/ActiveShipmentsCard/ActiveShipmentsCard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="cardsRow">
        <NotificationsCard />
        <FreightCard />
      </div>
      <ActiveShipmentsCard />
    </Layout>
  );
};

export default Dashboard;

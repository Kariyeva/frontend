import { GetServerSideProps } from "next";

export default function Dashboard({ user, notifications, analytics, time }: any) {
  return (
    <div>
      <h1>Welcome {user.name}</h1>

      <h2>Analytics</h2>
      <p>Views: {analytics.pageViews}</p>
      <p>Sessions: {analytics.sessions}</p>

      <h2>Notifications</h2>
      {notifications.map((n: any) => (
        <div key={n.id}>{n.message}</div>
      ))}

      <p>Time: {time}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      user: { name: "Demo User" },
      notifications: [
        { id: "1", message: "Welcome!" },
        { id: "2", message: "Profile updated" },
      ],
      analytics: {
        pageViews: Math.floor(Math.random() * 1000),
        sessions: Math.floor(Math.random() * 100),
      },
      time: new Date().toISOString(),
    },
  };
};
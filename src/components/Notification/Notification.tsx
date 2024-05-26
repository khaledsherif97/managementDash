import React, { useState } from "react";
import { List, Card, Button } from "antd";

const NotificationComponent: React.FC = () => {
  const [notifications, setNotifications] = useState<
    Array<{ title: string; body: string; id: number }>
  >([]);

  return (
    <div style={{ margin: "20px" }}>
      <Button type="primary" onClick={() => setNotifications([])}>
        Clear Notifications
      </Button>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card title={item.title}>{item.body}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default NotificationComponent;

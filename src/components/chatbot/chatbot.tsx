"use client"

import React, { useState } from "react";
import { Modal, Button } from "antd";
import { MessageCircle } from "lucide-react";

const Chatbot = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleClose = () => setIsModalVisible(false);

  return (
    <>
      {/* Fixed Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={showModal}
          type="primary"
          size="large"
          shape="circle"
          className="flex h-14 w-14 items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          icon={<MessageCircle className="h-6 w-6" />}
        />
      </div>

      {/* Chat Modal */}
      <Modal
        title="Cody AI Chatbot"
        open={isModalVisible}
        onCancel={handleClose}
        footer={null}
        width="100%"
        style={{ maxWidth: "800px" }}
      >
        <iframe
          src="https://embed.cody.bot/9d54bf22-8e62-4c98-8a90-ad00912fe731"
          title="Cody AI Chatbot"
          style={{ border: 0, width: "100%", height: "600px" }}
          name="codyai"
          scrolling="no"
          frameBorder="1"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};

export default Chatbot;

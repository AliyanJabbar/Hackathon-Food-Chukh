const handleUpdateStatus = async (orderId: string, status: string) => {
  try {
    console.log('Sending data:', { orderId, status });
  
    const response = await fetch("/api/updateOrderStatus", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, status }),
    });
    
    const data = await response.json();
    console.log('Response:', data);
    return data.success;
  } catch (error) {
    console.error("Error updating status:", error);
    return false;
  }
};

export default handleUpdateStatus;

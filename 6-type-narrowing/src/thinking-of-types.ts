//type Status = "pending" | "completed";

type OrderStatus = "pending" | "completed";
type DeliveryStatus = "completed" | "shipped";
type Status = OrderStatus | DeliveryStatus;  // type jadi "pending" | "completed" | "shipped"


//type Status = OrderStatus & DeliveryStatus;  //type jadi"completed" saja


function logStatus(status: string | null) {
    if (status) {
      console.log(status);
    }
  }
import type TransactionData from "./TransactionData";

type SubscriptionData = TransactionData & {
  nextRetryDate: string;
  productName: string;
  planName: string;
};

export default SubscriptionData;

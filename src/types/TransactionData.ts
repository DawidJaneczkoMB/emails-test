type TransactionData = {
  orderId: string | number;
  transactionDate: string;
  amount: string | number;
  paymentFormUrl?: string;
  currency: string;
  website: string;
};

export default TransactionData;

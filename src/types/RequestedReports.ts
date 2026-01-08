export type ReportType =
  | "balanceplatform_accounting_report"
  | "balanceplatform_statement_report"
  | "balanceplatform_balance_report"
  | "payment_accounting_report"
  | "pending_transactions"
  | "booked_transactions"
  | "settlement_report"
  | "payouts";

export const ReportTypeLabels: Record<ReportType, string> = {
  balanceplatform_accounting_report: "Accounting Details",
  balanceplatform_statement_report: "Statement Details",
  balanceplatform_balance_report: "Running Balance",
  pending_transactions: "Transactions Details",
  payment_accounting_report: "Payment Details",
  booked_transactions: "Transactions Details",
  settlement_report: "Settlement Details",
  payouts: "Payouts Details",
};

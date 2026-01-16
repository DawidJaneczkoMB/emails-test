import dayjs from "dayjs";

const FINAL_WARNING_THRESHOLD = 3;

export type PeriodicReviewCopyProps = {
  actionLimitInDays: number;
  dueDate: string;
};

export function PeriodicReviewCopy(props: PeriodicReviewCopyProps) {
  return props.actionLimitInDays > FINAL_WARNING_THRESHOLD ? (
    <PeriodicReviewGeneralCopy {...props} />
  ) : (
    <PeriodicReviewFinalCopy {...props} />
  );
}

export function PeriodicReviewFinalCopy({
  dueDate,
}: Pick<PeriodicReviewCopyProps, "dueDate">) {
  return (
    <>
      This is a final reminder to complete your periodic account review. You
      have{" "}
      <strong>3 days left till {dayjs(dueDate).format("MMM D, YYYY")}</strong>{" "}
      to update your missing information.
      <br />
      <br />
      If the review isn't completed by {dayjs(dueDate).format("MMM D, YYYY")},
      some parts of the Payments AI may no longer work as expected - including
      critical payment functions.
      <br />
      <br />
      To avoid any disruption, please log in now and complete the required
      steps.
      <br />
      <br />
      Thank you for acting promptly.
    </>
  );
}

export default function PeriodicReviewGeneralCopy({
  actionLimitInDays,
  dueDate,
}: Pick<PeriodicReviewCopyProps, "actionLimitInDays" | "dueDate">) {
  return (
    <>
      As part of our regular compliance checks, we need you to complete a
      periodic review of your account.
      <br />
      <br />
      Some required information is missing, and until it's updated, certain
      actions in the app will be restricted.
      <br />
      <br />
      You have {actionLimitInDays} days to complete this review. If the update
      isn't submitted within {actionLimitInDays} days, your access to certain
      features may be limited.
      <br />
      <br />
      We'll also remind you again when only 3 days remain - failure to act may
      result in disruptions to your use of Payments AI.
      <br />
      <br />
      Please log in by {dayjs(dueDate).format("MMM D, YYYY")} and provide the
      necessary details to restore full access.
      <br />
      <br />
      Thank you for your attention to this matter.
    </>
  );
}

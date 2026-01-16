import { Main } from "@/components/emails/Main";
import { Text } from "@/components/emails/Text";

type PaypalMerchantsListProps = {
  merchantList: string[];
};

export function PaypalMerchantsList({
  merchantList,
}: PaypalMerchantsListProps) {
  return (
    <Main withTerms={false} withWrapper={false}>
      <Text className="text-left">
        Hello,
        <br />
        Please enable reference transactions for merchants we&apos;ve onboarded:
      </Text>
      <ul className="pl-40 my-16">
        {merchantList.map((merchant) => (
          <li
            key={merchant}
            className="text-pickled-bluewood font-body text-body"
          >
            <Text className="text-left">{merchant}</Text>
          </li>
        ))}
      </ul>
      <Text className="text-left">
        Best regards,
        <br />
        PaymentsAI
      </Text>
    </Main>
  );
}

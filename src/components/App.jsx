import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";
import { ProfileSM } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "./data/user.json";
import data from "./data/data.json";

import { FriendList } from "./FriendList/FriendList";
import friends from "./data/friends.json";
import { Transactions } from "./TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

export const App = () => {
  return (
    <Layout>
      <ProfileSM userData={user}/>
      <Statistics items={data}/>
      <FriendList friends={friends} />
      <Transactions transactions={transactions}/>
      <GlobalStyles/>
    </Layout>
   

  );
};

/* eslint-disable prettier/prettier */
import { Redirect } from "expo-router";
const Home = () => {
  return <Redirect href="/(auth)/welcome" />;  //ignore error code
};

export default Home;

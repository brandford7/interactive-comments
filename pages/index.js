import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Commentbox from "../components/Commentbox";

import Comments from "../components/Comments";

export default function Home() {
  return (
    <Flex direction='column'  bg="hsl(223, 19%, 93%)" fontSize="16px" h="1920px">
      <Head>
        <title>Interactive Comments</title>
        <meta name="description" content="Interactive Comments" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Comments />
      <Commentbox />
    </Flex>
  );
}

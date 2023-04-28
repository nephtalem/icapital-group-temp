import Head from "next/head";

export const Title = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{`${title} - The i-Capital Africa Institute`}</title>
      <link rel="icon" type="image/x-icon" href={`/favicon.ico`} />
      <meta name="description" content="The i-Capital Africa Institute" />
      <meta property="og:title" content="The i-Capital Africa Institute" />
      <meta
        property="og:description"
        content="The i-Capital Africa Institute"
      />
      <meta
        property="og:image"
        content={`https://${process.env.NEXT_PUBLIC_DOMAIN}/images/cover.png`}
      />

      <meta name="twitter:card" content="The i-Capital Africa Institute" />
      <meta name="twitter:site" content="@iCapitalAfrica" />
      <meta
        property="og:url"
        content={`https://${process.env.NEXT_PUBLIC_DOMAIN}`}
      />
    </Head>
  );
};

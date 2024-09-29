import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title} | UnchainPet: Decentralized Pet Adoption Network</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "UnchainPet: Decentralized Pet Adoption Network",
  keyword:
    "decentralized pet adoption, blockchain pet adoption, NFT pets, minting pet NFTs, adopt pets online, pet rescue, pet fostering, animal adoption, pet rehoming, pet ownership NFTs, animal shelter network",
  desc: "Unchainpet is a decentralized platform that transforms pet adoption by leveraging blockchain technology. After adoption, pets are minted as unique NFTs, ensuring transparent ownership and lifelong records. Connect with shelters, rescue organizations, or individual pet owners to adopt, foster, or rehome pets securely. PawPal offers a seamless adoption process with the added benefit of minting your new pet as an NFT, ensuring proof of ownership and authenticity. Adopt, own, and cherish your furry companion in both the real world and the digital realm!",
};

export default Meta;

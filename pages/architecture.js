import Image from "next/image";

import Section from "@/components/Section/Section";

const architecture = () => {
  return (
    <>
      <Section center>
        <div>
          <h1>CONTENTS</h1>
        </div>
      </Section>
      <Section center>
        <div style={{ position: "relative", height: "200px", width: "200px", overflow: "hidden" }}>
          <Image src="https://media.chansen.design/placeholder.jpg" width="200px" height="200px" layout="fill" />
        </div>
      </Section>
      <Section center>header</Section>
      <Section center>header</Section>
    </>
  );
};

export default architecture;

import Head from "next/head";
import Image from "next/image";
import Section from "@/components/Section/Section";
import AnimationCHansen from "@/components/AnimationCHansen/AnimationCHansen";

export default function Home() {
  return (
    <>
      <Section center>
        <div style={{ padding: "10vw 200px 0 0", width: "800px" }}>
          <AnimationCHansen />
        </div>
      </Section>
      <Section center>
        <div style={{ maxWidth: "600px" }}>
          <h4 style={{ paddingBottom: "1rem" }}>Hello, and welcome to my site.</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem eveniet fugit officia qui, dignissimos
            blanditiis accusantium, molestias fugiat error autem quae eum iste repellendus? Reprehenderit repudiandae.
          </p>
        </div>
      </Section>
    </>
  );
}

const style = {
  width: "800px",
  paddingTop: "10vw",
};

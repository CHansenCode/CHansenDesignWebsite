import Section from "@/components/Section/Section";
import NavLink from "@/components/NavLink";

const template = () => {
  return (
    <>
      <Section center>
        <div style={{ marginTop: "10vw", width: "320px", height: "320px", border: "thin solid", marginRight: "5rem" }}>
          <div style={{ height: "66%", width: "100%", backgroundColor: "rgb(245,160,145)" }} />
          <div style={{ padding: "1rem" }}>
            <h4>rgb(245,160,145) - corally</h4>
          </div>
        </div>
        <div style={{ marginTop: "10vw", width: "320px", height: "320px", border: "thin solid" }}>
          <div style={{ height: "66%", width: "100%", backgroundColor: "rgb(65,170,190)" }} />
          <div style={{ padding: "1rem" }}>
            <h4>rgb(65,170,190) - tealy</h4>
          </div>
        </div>
      </Section>
    </>
  );
};

export default template;

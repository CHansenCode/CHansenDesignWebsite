import StyledDiv from "@/components/StyledDiv";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import OnHoverTranslate from "@/components/OnHoverTranslate/OnHoverTranslate";

import Section from "@/components/Section/Section";

const webdesign = () => {
  return (
    <>
      <Section column padding="10vw">
        <h2 className="secondary">Topic for this place</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatibus ratione magnam molestias dolorem
          optio vitae, blanditiis perspiciatis voluptatum atque reiciendis veniam in minima libero reprehenderit quos
          eos inventore. Repellendus.
        </p>
      </Section>

      <Section title="Ways of working" column center padding="10vw 0 0 0">
        <OnHoverTranslate>
          <StyledDiv padding="0">
            <CodeBlock
              title="Functional components"
              code={`<InteractiveMediaGallery

  title="Latest and greatest Graphic's by ..."
  gallery={state.gallery}
  
/>


...


import MediaPost from "@/components/MediaPost"

Const InteractiveMediaGallery = ({gallery}) => {
  return (
    <>
      {gallery.map((mediaPost) => (<MediaPost src={mediaPost.src} />))}
    </>
  )
}`}
            />
          </StyledDiv>
        </OnHoverTranslate>
      </Section>

      <Section>
        <code>
          <p>cow</p>
        </code>
      </Section>
    </>
  );
};

export default webdesign;

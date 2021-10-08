import StyledDiv from "@/components/StyledDiv";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import OnHoverTranslate from "@/components/OnHoverTranslate/OnHoverTranslate";

import Section from "@/components/Section/Section";

const webdesign = () => {
  return (
    <>
      <Section column center padding="10vw 0 0 0">
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

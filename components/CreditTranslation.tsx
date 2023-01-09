import { BLOG_URL } from "../config";
import Contributor from "../models/Contributor";
import Container from "./Container";
import Credit from "./Credit";

type Props = {
  translator?: Contributor;
  showContent?: boolean;
};

const CreditTranslation = ({ translator, showContent }: Props) => {
  if (!translator) {
    return null;
  }

  // hackily ensure the same dimensions by mirroring elements
  const { picture, hillfire, instagram, linkedIn, website } = translator;
  const hasPicture = !!picture;
  const hasLink = !!(hillfire || instagram || linkedIn || website);

  return (
    <div className="mx-auto bg-neutral-50 pt-10 pb-20 md:pb-0">
      <Container>
        <div className="md:flex flex-row flex-start items-center">
          <div className="mr-14 mb-10">
            <strong className="block mb-3">Written by</strong>
            <Credit
              title="Chris Drifte"
              picture={
                hasPicture ? "/assets/contributor/chris-drifte.jpg" : null
              }
              website={hasLink ? BLOG_URL + "/en-GB" : null}
            />
          </div>
          <div className="mr-14 mb-10">
            <strong className="block mb-3">Translated by</strong>
            <Credit
              title={translator.title}
              picture={translator.picture}
              hillfire={translator.hillfire}
              instagram={translator.instagram}
              linkedIn={translator.linkedIn}
              website={translator.website}
            />
          </div>
          {showContent && translator.content && (
            <div
              className="md:w-1/2 md:text-xs"
              dangerouslySetInnerHTML={{
                __html: translator.content,
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default CreditTranslation;

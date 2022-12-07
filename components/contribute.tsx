import Button from "./Button";
import Container from "./Container";
import Statement from "./Statement";

const Contribute = () => {
  return (
    <aside className="bg-neutral-50">
      <Container>
        <div className="relative py-28 flex flex-col lg:flex-row items-center">
          <Statement>A platform for everyone</Statement>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Button url="mailto:contribute@howtohitchhike.com">
              Email us your hitching advice, stories, or anything else
            </Button>
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default Contribute;

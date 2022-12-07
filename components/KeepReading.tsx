import Button from "./Button";
import Container from "./Container";
import Statement from "./Statement";

const KeepReading = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 relative pb-8">
      <Container>
        <div className="relative py-28 flex flex-col lg:flex-row items-center">
          <Statement>Want to keep reading on the road?</Statement>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Button
              variant="primary"
              url="https://www.amazon.com/Rules-Thumb-Hitch-Hike-Live-Road/dp/1503237419"
            >
              Buy Paperback ($10.99)
            </Button>
            <Button
              variant="secondary"
              url="https://www.amazon.com/Rules-Thumb-Hitch-Hike-Live-Road-ebook/dp/B00PS8S9VG/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=`"
            >
              Buy on Kindle ($4.49)
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 w-full p-4 text-center text-xs opacity-75">
        Optional purchase: all book content can be read on this website for
        free.
      </div>
    </footer>
  );
};

export default KeepReading;

import Container from './container';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Get the book: Rules of Thumb - How to Hitchhike and Live on the Road
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.amazon.com/Rules-Thumb-Hitch-Hike-Live-Road/dp/1503237419"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Buy Paperback ($10.99)
            </a>
            <a
              href="https://www.amazon.com/Rules-Thumb-Hitch-Hike-Live-Road-ebook/dp/B00PS8S9VG/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=`"
              className="mx-3 font-bold hover:underline"
            >
              Buy on Kindle ($4.49)
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
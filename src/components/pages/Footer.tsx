import Link from "next/link";

function Footer() {
  return (
    <div
      className="flex flex-col items-center justify-center mt-28 bg-black text-white"
      id="contact"
    >
      <div>
        <p className="font-light text-5xl md:text-9xl text-center pt-24 pb-6">
          Let&apos;s work
          <br />
          together
          <br />
        </p>
        <hr className="my-14 text-white" />
      </div>

      <div className="flex gap-11 flex-col md:flex-row text-center md:text-start mb-11 md:mb-0">
        <div className="border rounded-xl p-2">
          <Link href={"mailto:dagkiranlar.m@gmail.com"}>
            dagkiranlar.m@gmail.com
          </Link>
        </div>
        <div className="border rounded-xl p-2">
          <Link href={"tel:+905488708510"}>+90 548 870 8510</Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between w-full pb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start md:mx-20 text-center gap-6 mb-6 md:mb-0">
          <div>
            <p className="text-faded-i-hope">LinkedIn</p>
            <Link
              href={
                "https://www.linkedin.com/in/mustafa-da%C4%9Fk%C4%B1ranlar/"
              }
            >
              /mustafa-dağkıranlar
            </Link>
          </div>
          <div className="text-center">
            <p className="text-faded-i-hope">X</p>
            <Link href={"https://twitter.com/dagkiranlarm"}>/dagkiranlar</Link>
          </div>
        </div>
        <div className="md:mx-20">
          <div className="text-center">
            <p>developed by</p>
            <div className="text-faded-i-hope">
                Mustafa Dağkıranlar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

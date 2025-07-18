export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="font-libre text-lg mt-2 text-muted-foreground">
        Elegant and timeless pieces made with passion.
      </p>

      <h2 className="font-playfair text-3xl font-normal mt-10">New Drop</h2>
      <span className="font-italiana text-xl tracking-widest">Summer 2025</span>

      <h3 className="font-gloock text-2xl mt-10">Art Deco Revival</h3>
      <p className="font-inter text-base">
        Inspired by vintage magazines and golden era aesthetics.
      </p>
      <section className="text-center my-20">
        <h1 className="font-cormorant text-5xl ">The Signature Collection</h1>
        <p className="font-rosarivo text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Each piece tells a story of elegance, heritage, and timeless grace.
        </p>
      </section>
    </div>
  );
}

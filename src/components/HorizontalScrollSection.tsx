// HorizontalScrollSection.tsx
const HorizontalScrollSection = () => {
    return (
      <div className="flex w-[300vw] h-screen">
        <div
          className="w-screen h-screen bg-red-400 flex items-center justify-center"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          <h1 className="text-5xl">Section 1</h1>
        </div>
        <div
          className="w-screen h-screen bg-green-400 flex items-center justify-center"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
        >
          <h1 className="text-5xl">Section 2</h1>
        </div>
        <div
          className="w-screen h-screen bg-blue-400 flex items-center justify-center"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
        >
          <h1 className="text-5xl">Section 3</h1>
        </div>
      </div>
    )
  }
  
  export default HorizontalScrollSection
  
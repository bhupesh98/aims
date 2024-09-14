import about from "@/data/about.json";

export default function About() {
  return (
    <>
      {about.map((item, index) => (
        <div key={item.title || index} className="mb-8">
          {item.title && <h1 className="text-xl text-red-700 font-bold mb-2">{item.title}</h1>}
          <p>{item.content}</p>
          {item.subcontent &&
            item.subcontent.map(sub => (
              <div key={sub.title} className="mt-4 ml-4">
                <h2 className="mb-2 text-gray-700 underline font-semibold text-lg">{sub.title}</h2>
                <p>{sub.content}</p>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

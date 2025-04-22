const images = [
  {
    name: "Dj Nice Rack at Luna Fete in the Luna Lounge",
    id: "107QVK8H57pJAtvsiVAkaedVbz-wHaPsh", // Corrected to use `id` consistently
  },
];
export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col gap-8 p-6">
      <h2 className="text-4xl font-bold">Aurora Jiminez</h2>
      <p>Photographer</p>
      <ul>
        {images.map((image, index) => {
          return (
            <li key={index}>
              <h1>{image.name}</h1>
              {/* <img src={image.src} alt={image.name} /> */}
              <img
                src={`https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`}
                alt={image.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
